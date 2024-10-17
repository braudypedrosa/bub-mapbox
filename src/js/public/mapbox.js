import { get_unique_categories, get_location_details } from './mapbox-helper';
import * as helper from './utility-functions';

(function($) {
    console.log('Initializing Mapbox ...');

    // Define variables
    const plugin_settings = bub_mapbox_ajax.plugin_settings;
    const directory_uri = bub_mapbox_ajax.directory_uri;

    console.log('Plugin Settings: ' + plugin_settings);

    let style = plugin_settings.mapbox_style ? plugin_settings.mapbox_style : 'mapbox://styles/buildupbookings/clwl4g15g00tr01q17rjs6lm5';
    let mapbox_token = plugin_settings.mapbox_token;
    let defaultZoom = 14;

    // Add map controls
    const zoomControl = new mapboxgl.NavigationControl({
        showZoom: true,
    });

    const screenWidth = window.innerWidth;
    const markers = {};

    mapboxgl.accessToken = mapbox_token;

    // Iterate through all bubmapbox_map
    $('.bubmapbox-container').each(async function() {

        let map_id = $(this).find('.bubmapbox-map').attr('id');
        let location_ids = ($(this).find('.bubmapbox-map').attr('data-locations') != 'all') ? JSON.parse($(this).find('.bubmapbox-map').attr('data-locations')) : $(this).find('.bubmapbox-map').attr('data-locations');

        let locations = await get_location_details(location_ids);
        let categories = await get_unique_categories(locations);

        const toggleContainer = $(this).find('.map-toggles');
        
        console.log(map_id);
        console.log(locations);
        console.log(categories);
        console.log(toggleContainer);

        let geo_json = helper.get_geojson(locations);
        console.log(geo_json);

        let center_coordinates = helper.calculate_map_center(locations);

        let mapbox_map = new mapboxgl.Map({
            container: map_id,
            style: style,
            center: [center_coordinates['lng'], center_coordinates['lat']],
            zoom: defaultZoom
        });

        mapbox_map.addControl(zoomControl);
        mapbox_map.addControl(new mapboxgl.FullscreenControl());

        mapbox_map.on('load', () => {
            categories.forEach((item, index) => {

                // Generate toggle menu
                toggleContainer.append('<span ' + ((index === 0) ? 'class="active"' : '' ) + ' data-toggle="' + item + '">' + helper.bub_mapbox_unslugify(item) + '</span>');

                // Define custom icon
                let mapIcon = directory_uri + 'assets/images/icons/' + helper.bub_mapbox_slugify(item) + '.png';

                // Load the image only once per category
                if (!mapbox_map.hasImage(item + '-icon')) {
                    mapbox_map.loadImage(mapIcon, (error, image) => {
                        if (error) throw error;

                        // Add custom icon
                        mapbox_map.addImage(item + '-icon', image);

                        // Add map source with filtered geo_json data for the current category
                        mapbox_map.addSource(item, {
                            'type': 'geojson',
                            'data': {
                                "type": "FeatureCollection",
                                "features": geo_json.features.filter(feature => feature.properties.category === item)
                            }
                        });

                        // Define custom layers
                        mapbox_map.addLayer({
                            'id': item + '-layer',
                            'type': 'symbol',
                            'source': item,
                            'layout': {
                                'visibility': (index === 0) ? 'visible' : 'none', // Set first layer as visible
                                'icon-image': item + '-icon',
                                'icon-size': [
                                    'interpolate',
                                    ['linear'],
                                    ['zoom'],
                                    0, 0.25,  
                                    12, 0.5,
                                    22, 0.5
                                ],
                                'text-field': ['get', 'title'],
                                'text-font': ['Barlow Medium'],
                                'text-max-width': 7,
                                'text-line-height': 1.1,
                                'text-size': 12,
                                'text-variable-anchor': ['top'],
                                'text-justify': 'center',
                                'text-radial-offset': 0.8,
                                'symbol-placement': 'point',
                                'symbol-avoid-edges': true
                            },
                            'minzoom': 0,
                            'maxzoom': 22
                        });

                        markers[item] = [];
                    
                        geo_json.features.filter(feature => feature.properties.category.includes(item) || feature.properties.persist === true).forEach(function(feature, featureIndex) {
                            const coordinates = feature.geometry.coordinates;

                            let popup_markup = `
                                <div class="marker-popup">
                                    <h3 class="marker-name">${feature.properties.title}</h3>
                                    ${feature.properties.description ? `<p class="description">${feature.properties.description}</p>` : '' }
                                    <div class="marker-meta">
                                        ${feature.properties.address ? `<span class="address"><strong>Address: </strong>${feature.properties.address}</span>` : ''}
                                        ${feature.properties.phone ? `<span class="phone"><strong>Phone: </strong>${feature.properties.phone}</span>` : '' }
                                    </div>
                                    ${feature.properties.distance ? `<span class="distance">${feature.properties.distance} miles (${feature.properties.walktime} walk time)</span>` : '' }
                                    ${feature.properties.website ? `<a class="marker-button" href="${feature.properties.website}">Visit Website</a>` : ''}
                                </div>
                            `;

                            const popup = new mapboxgl.Popup({
                                anchor: (screenWidth > 767) ? 'right' : 'top'
                            }).setHTML(popup_markup).on('open', () => {
                                mapbox_map.flyTo({
                                    center: coordinates,
                                    offset: [0, -50]
                                });
                            }).setMaxWidth('320px');

                            const marker = new mapboxgl.Marker({ color: (feature.properties.marker_color) ? feature.properties.marker_color : plugin_settings.mapbox_marker_color ? plugin_settings.mapbox_marker_color : '#3da7c3' })
                                .setLngLat(coordinates)
                                .setPopup(popup)
                                .addTo(mapbox_map);

                            // Ensure only the first category's markers are displayed initially
                            if (index === 0) {
                                marker.getElement().style.display = 'block';
                            } else {
                                marker.getElement().style.display = 'none';
                            }

                            // If the property has persist true, set the marker to be always on top
                            if (feature.properties.persist === true) {
                                marker.getElement().style.zIndex = '999';
                            }

                            markers[item].push(marker);
                        });

                    });
                }

                // Add toggle functionality
                $('.map-toggles [data-toggle="'+item+'"]').click(function() {
                    toggleLayers(mapbox_map, item, categories, markers);
                    jQuery('.map-toggles span').removeClass('active');
                    jQuery(this).addClass('active');
                });

            });

        });

    });

    function toggleLayers(map, activeLayer, layerArray, markers) {
        // Close all open popups
        for (const layer in markers) {
            markers[layer].forEach(marker => {
                if (marker.getPopup().isOpen()) {
                    marker.togglePopup();
                }
            });
        }
        
        layerArray.forEach(item => {
            if (item !== activeLayer) {
                map.setLayoutProperty(item + '-layer', 'visibility', 'none');
                markers[item].forEach(marker => marker.getElement().style.display = 'none');
            }
        });

        map.setLayoutProperty(activeLayer + '-layer', 'visibility', 'visible');
        markers[activeLayer].forEach(marker => marker.getElement().style.display = 'block');
    }

})(jQuery);
