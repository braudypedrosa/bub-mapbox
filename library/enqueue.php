<?php

add_action('wp_enqueue_scripts', BUB_PLUGIN_NAME . '_enqueue_styles_scripts');

function bub_mapbox_enqueue_styles_scripts() {

    wp_enqueue_style(
        BUB_PLUGIN_NAME . '-style', 
        plugin_dir_url( dirname( __FILE__ ) ) . 'dist/css/bundled-main.css',
        array(), 
        BUB_MAPBOX_VERSION, 
        'all' 
    );

    wp_enqueue_script(
        BUB_PLUGIN_NAME . '-script', 
        plugin_dir_url( dirname( __FILE__ ) ) . 'dist/js/bundled-main.js',
        array('jquery'), 
        BUB_MAPBOX_VERSION,
        true
    );

}