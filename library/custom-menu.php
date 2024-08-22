<?php
add_action('admin_menu', 'locations_settings');

function locations_settings() {
    add_submenu_page(
        'edit.php?post_type=mapbox-location', 
        'Mapbox Settings', 
        'Mapbox Settings', 
        'manage_options', 
        'locations-settings', 
        'render_settings_page' 
    );
}

function render_settings_page() {
    // Path to the settings template in your plugin
    $template_path = plugin_dir_path( __DIR__ ) . 'views/settings.php';

    if ( file_exists( $template_path ) ) {
        include $template_path;
    } else {
        echo '<div class="wrap"><h1>Settings Page</h1><p>Settings template not found.</p></div>';
    }
}

