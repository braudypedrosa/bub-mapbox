<?php
/*
Plugin Name: Mapbox by Buildup Bookings
Description: Mapbox integration with WordPress
Version: 1.2.4
Author: Braudy Pedrosa
Author URI: https://buildupbookings.com//
License: GPL-2.0+
*/

if ( ! defined( 'ABSPATH' ) ) {
    exit; // Exit if accessed directly.
}

// Define constants
define( 'BUB_MAPBOX_VERSION', '1.2.4' );
define( 'BUB_PLUGIN_NAME', 'bub_mapbox' );

// Include required files
require_once plugin_dir_path( __FILE__ ) . 'includes/class-bub-mapbox.php';


// Initialize the plugin
function run_bub_mapbox() {
    $plugin = new BUB_Mapbox();
    $plugin->run();
}

add_action( 'plugins_loaded', 'run_bub_mapbox' );

