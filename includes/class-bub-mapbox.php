<?php

if ( ! defined( 'ABSPATH' ) ) {
    exit; // Exit if accessed directly.
}

class BUB_Mapbox {
    
    public function __construct() {
        
    }

    public function run() {

        $this->load_dependencies();

    }

    public function load_dependencies() {
        // Other includes
        require_once plugin_dir_path( dirname( __FILE__ ) ) . 'library/required-plugins.php';
        require_once plugin_dir_path( dirname( __FILE__ ) ) . 'library/helpers.php';
        require_once plugin_dir_path( dirname( __FILE__ ) ) . 'library/enqueue.php';
        require_once plugin_dir_path( dirname( __FILE__ ) ) . 'library/settings.php';
        require_once plugin_dir_path( dirname( __FILE__ ) ) . 'library/post-types.php';
        require_once plugin_dir_path( dirname( __FILE__ ) ) . 'library/custom-menu.php';
        require_once plugin_dir_path( dirname( __FILE__ ) ) . 'library/hooks.php';
    
        // include all ajax function
        require_once plugin_dir_path( dirname( __FILE__ ) ) . 'library/ajax-functions/mapbox.php';
    
        require_once plugin_dir_path( dirname( __FILE__ ) ) . 'library/shortcodes.php';
    }

}
