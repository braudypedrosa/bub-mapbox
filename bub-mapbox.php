<?php
/*
Plugin Name: Mapbox by Buildup Bookings
Description: Mapbox integration with WordPress
Version: 1.2.2
Author: Braudy Pedrosa
Author URI: https://buildupbookings.com//
License: GPL-2.0+
*/

if ( ! defined( 'ABSPATH' ) ) {
    exit; // Exit if accessed directly.
}

// Define constants
define( 'BUB_MAPBOX_VERSION', '1.2.2' );
define( 'BUB_PLUGIN_NAME', 'bub_mapbox' );

// Include required files
require_once plugin_dir_path( __FILE__ ) . 'includes/class-bub-mapbox.php';

function activate_bub_mapbox() {
    require_once plugin_dir_path( __FILE__ ) . 'includes/class-bub-mapbox-activator.php';
    BUB_Activator::activate();
}

function deactivate_bub_mapbox() {
    require_once plugin_dir_path( __FILE__ ) . 'includes/class-bub-mapbox-deactivator.php';
    BUB_Deactivator::deactivate();
}

register_activation_hook( __FILE__, 'activate_bub_mapbox' );
register_deactivation_hook( __FILE__, 'deactivate_bub_mapbox' );

// Initialize the plugin
function run_bub_mapbox() {
    $plugin = new BUB_Mapbox();
    $plugin->run();
}

add_action( 'plugins_loaded', 'run_bub_mapbox' );

// Add error handling for class loading
if ( ! class_exists( 'BUB_Mapbox' ) ) {
    error_log( 'BUB_Mapbox class not found. Please check the includes/class-bub-mapbox.php file.' );
}

if ( ! class_exists( 'BUB_Activator' ) ) {
    error_log( 'BUB_Activator class not found. Please check the includes/class-bub-mapbox-activator.php file.' );
}

if ( ! class_exists( 'BUB_Deactivator' ) ) {
    error_log( 'BUB_Deactivator class not found. Please check the includes/class-bub-mapbox-deactivator.php file.' );
}
