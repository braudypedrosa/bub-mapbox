<?php

add_action('wp_enqueue_scripts', BUB_PLUGIN_NAME . '_enqueue_public_styles_scripts');
add_action('admin_enqueue_scripts', BUB_PLUGIN_NAME . '_enqueue_admin_styles_scripts');

global $version;
$version = BUB_MAPBOX_VERSION . '.' . time() . '.' . uniqid();



function bub_mapbox_enqueue_public_styles_scripts() {
    bub_mapbox_external_public_styles_scripts();
    bub_mapbox_public_styles_scripts();
}

function bub_mapbox_enqueue_admin_styles_scripts() {
    $screen = get_current_screen();
    
    if ($screen->id === 'mapbox-location_page_locations-settings') {
        bub_mapbox_external_admin_styles_scripts();
        bub_mapbox_admin_styles_scripts();
    }
}

function bub_mapbox_public_styles_scripts() {
    global $version;
   
    wp_enqueue_style(BUB_PLUGIN_NAME . '-public-style', plugin_dir_url(dirname(__FILE__)) . 'dist/css/public/bundled-main.css', [], $version, 'all');
    wp_enqueue_script(BUB_PLUGIN_NAME . '-public-script', plugin_dir_url(dirname(__FILE__)) . 'dist/js/public/bundled-main.js', ['jquery'], $version, true);

    wp_localize_script(BUB_PLUGIN_NAME . '-public-script', BUB_PLUGIN_NAME  . '_ajax',  
        array(
            'plugin_settings' => get_plugin_settings(),
            'directory_uri' => plugin_dir_url(dirname(__FILE__)),
            'ajax_url' => admin_url('admin-ajax.php'),
            'nonce' => wp_create_nonce(BUB_PLUGIN_NAME . '_nonce')
        )
    );
}

function bub_mapbox_external_public_styles_scripts() {
    global $version;
    // Mapbox
    wp_enqueue_style(BUB_PLUGIN_NAME . '-mapbox', 'https://api.mapbox.com/mapbox-gl-js/v3.4.0/mapbox-gl.css', [], $version, 'all');
    wp_enqueue_script(BUB_PLUGIN_NAME . '-mapbox', 'https://api.mapbox.com/mapbox-gl-js/v3.4.0/mapbox-gl.js', [], $version, true);
}

function bub_mapbox_admin_styles_scripts() {
    global $version;
    
    wp_enqueue_style(BUB_PLUGIN_NAME . '-admin-style', plugin_dir_url(dirname(__FILE__)) . 'dist/css/admin/bundled-main.css', [], $version, 'all');
    wp_enqueue_script(BUB_PLUGIN_NAME . '-admin-script', plugin_dir_url(dirname(__FILE__)) . 'dist/js/admin/bundled-main.js', ['jquery'], $version, true);

}

function bub_mapbox_external_admin_styles_scripts() {
    global $version;
    // Bootstrap
    wp_enqueue_style(BUB_PLUGIN_NAME . '-bootstrap', plugin_dir_url(dirname(__FILE__)) . 'node_modules/bootstrap/dist/css/bootstrap.min.css', [], $version, 'all');
    wp_enqueue_script(BUB_PLUGIN_NAME . '-bootstrap', plugin_dir_url(dirname(__FILE__)) . 'node_modules/bootstrap/dist/js/bootstrap.min.js', [], $version, true);
}
