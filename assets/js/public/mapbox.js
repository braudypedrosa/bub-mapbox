(function($) {
    console.log('Initializing Mapbox ...');

    if (typeof bub_mapbox_ajax === 'undefined') {
        console.error('bub_mapbox_ajax is not defined. Make sure wp_localize_script is working.');
        return;
    }

    console.log(bub_mapbox_ajax);

    // Define variables
    const plugin_settings = bub_mapbox_ajax.plugin_settings;

    let style = plugin_settings.mapbox_style ? plugin_settings.mapbox_style : 'mapbox://styles/buildupbookings/clwl4g15g00tr01q17rjs6lm5';
    let mapbox_token = plugin_settings.mapbox_token;
    let default_coordinates = {
        'lat': plugin_settings.mapbox_latitude,
        'lng': plugin_settings.mapbox_longitude
    };

    // iterate to all bubmapbox_map
    $('.bubmapbox_map').each(function(){

        let map_id = $(this).data('mapid');
        let locations = ($(this).attr('data-locations') != 'all') ? JSON.parse($(this).attr('data-locations')) : $(this).attr('data-locations');

        console.log(map_id);
        console.log(locations);

        $.ajax({
            url: bub_mapbox_ajax.ajax_url,
            type: 'POST',
            dataType: 'json',
            data: {
                action: 'get_mapbox_locations',
                nonce: bub_mapbox_ajax.nonce,
                locations: locations
            },
            success: function(response) {
                if (response.success) {
                    console.log('Locations:', response.data);
                } else {
                    console.error('Error:', response.data);
                }
            },
            error: function(error) {
                console.error('AJAX Error:', error);
            }
        });


    });

})(jQuery);
