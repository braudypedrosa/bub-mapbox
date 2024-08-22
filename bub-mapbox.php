<?php
/*
Plugin Name: Mapbox by Buildup Bookings
Description: Mapbox integration with WordPress
Version: 1.0
Author: Braudy Pedrosa
License: GPL2
*/

if ( ! defined( 'ABSPATH' ) ) {
    exit; // Exit if accessed directly.
}

// Define constants
define( 'BUB_MAPBOX_VERSION', '1.0' );
define( 'BUB_MAPBOX_DIR', plugin_dir_path( __FILE__ ) );
define( 'BUB_MAPBOX_URL', plugin_dir_url( __FILE__ ) );

// Include required files
require_once BUB_MAPBOX_DIR . 'includes/class-plugin-boilerplate.php';
require_once BUB_MAPBOX_DIR . 'includes/helpers.php';

// Activation and Deactivation hooks
register_activation_hook( __FILE__, array( 'BUB_MAPBOX', 'activate' ) );
register_deactivation_hook( __FILE__, array( 'BUB_MAPBOX', 'deactivate' ) );

// Initialize the plugin
function run_BUB_MAPBOX() {
    $plugin = new BUB_Mapbox();
    $plugin->run();
}
add_action( 'plugins_loaded', 'run_BUB_MAPBOX' );
