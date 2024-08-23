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


        $locations = get_field('locations', $shortcode_atts['id']) ?? null;

        if(!$locations) {

            $locations_id = 'all';
            
        } else {

            $locations_id = json_encode($locations);

        }


        return '<div class="bubmapbox_map" data-mapid="'.$shortcode_atts['id'].'" data-locations="'.$locations_id.'"></div>';
    }  

}