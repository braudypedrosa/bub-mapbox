<?php
// Available Shortcodes
add_shortcode('mapbox-map', 'bub_mapbox_builder_func');


function bub_mapbox_builder_func( $atts ) {
    
    $shortcode_atts = shortcode_atts( array(
		'id' => '',
	), $atts );

    if( $shortcode_atts['id'] == '' ) {
        return displayMessage(['code' => 'fail', 'message' => 'Parameter "ID" is required (Example: [mapbox-map id="xx"])']);
    } else {

        $settings = bub_mapbox_settings();

        if(!check_plugin_settings($settings)) {
            return displayMessage(['code' => 'fail', 'message' => 'Plugin settings are not configured properly.']);
        }

        $locations = get_field('locations', $shortcode_atts['id']) ?? null;

        if(!$locations) {

            $locations_id = 'all';
            
        } else {
            $locations_id = json_encode($locations);
        }


        return '<div class="bubmapbox-container"><div class="map-toggles"></div><div class="bubmapbox-map" id="bubmapbox_map_'.$shortcode_atts['id'].'" data-mapid="'.$shortcode_atts['id'].'" data-locations="'.$locations_id.'"></div></div>';
    }  

}
