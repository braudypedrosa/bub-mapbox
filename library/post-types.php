<?php 

add_action( 'init', 'register_custom_post_types' );


// custom columns
add_filter( 'manage_mapbox-map_posts_columns', 'bub_add_maps_columns' );
add_action( 'manage_mapbox-map_posts_custom_column', 'bub_mapbox_maps_column_content', 10, 2 );

function register_custom_post_types() {

    // Register Locations Post Type
    $location_labels = array(
        'name'               => _x( 'Locations', 'post type general name', BUB_PLUGIN_NAME ),
        'singular_name'      => _x( 'Location', 'post type singular name', BUB_PLUGIN_NAME ),
        'menu_name'          => _x( 'Locations', 'admin menu', BUB_PLUGIN_NAME ),
        'name_admin_bar'     => _x( 'Location', 'add new on admin bar', BUB_PLUGIN_NAME ),
        'add_new'            => _x( 'Add New', 'location', BUB_PLUGIN_NAME ),
        'add_new_item'       => __( 'Add New Location', BUB_PLUGIN_NAME ),
        'new_item'           => __( 'New Location', BUB_PLUGIN_NAME ),
        'edit_item'          => __( 'Edit Location', BUB_PLUGIN_NAME ),
        'view_item'          => __( 'View Location', BUB_PLUGIN_NAME ),
        'all_items'          => __( 'All Locations', BUB_PLUGIN_NAME ),
        'search_items'       => __( 'Search Locations', BUB_PLUGIN_NAME ),
        'parent_item_colon'  => __( 'Parent Locations:', BUB_PLUGIN_NAME ),
        'not_found'          => __( 'No locations found.', BUB_PLUGIN_NAME ),
        'not_found_in_trash' => __( 'No locations found in Trash.', BUB_PLUGIN_NAME )
    );

    $location_args = array(
        'labels'             => $location_labels,
        'public'             => true,
        'publicly_queryable' => true,
        'show_ui'            => true,
        'show_in_menu'       => true,
        'query_var'          => true,
        'rewrite'            => array( 'slug' => 'mapbox-location' ),
        'capability_type'    => 'post',
        'has_archive'        => true,
        'hierarchical'       => false,
        'menu_position'      => null,
        'menu_icon'          => 'dashicons-location-alt',
        'supports'           => array( 'title' )
    );

    register_post_type( 'mapbox-location', $location_args );

    // Register Maps Post Type
    $map_labels = array(
        'name'               => _x( 'Mapbox Maps', 'post type general name', BUB_PLUGIN_NAME ),
        'singular_name'      => _x( 'Map', 'post type singular name', BUB_PLUGIN_NAME ),
        'menu_name'          => _x( 'Mapbox Maps', 'admin menu', BUB_PLUGIN_NAME ),
        'name_admin_bar'     => _x( 'Map', 'add new on admin bar', BUB_PLUGIN_NAME ),
        'add_new'            => _x( 'Add New', 'map', BUB_PLUGIN_NAME ),
        'add_new_item'       => __( 'Add New Map', BUB_PLUGIN_NAME ),
        'new_item'           => __( 'New Map', BUB_PLUGIN_NAME ),
        'edit_item'          => __( 'Edit Map', BUB_PLUGIN_NAME ),
        'view_item'          => __( 'View Map', BUB_PLUGIN_NAME ),
        'all_items'          => __( 'Mapbox Maps', BUB_PLUGIN_NAME ),
        'search_items'       => __( 'Search Maps', BUB_PLUGIN_NAME ),
        'parent_item_colon'  => __( 'Parent Maps:', BUB_PLUGIN_NAME ),
        'not_found'          => __( 'No maps found.', BUB_PLUGIN_NAME ),
        'not_found_in_trash' => __( 'No maps found in Trash.', BUB_PLUGIN_NAME )
    );

    $map_args = array(
        'labels'             => $map_labels,
        'public'             => true,
        'publicly_queryable' => true,
        'show_ui'            => true,
        'show_in_menu'       => 'edit.php?post_type=mapbox-location', // Make it a submenu under Locations
        'query_var'          => true,
        'rewrite'            => array( 'slug' => 'mapbox-map' ),
        'capability_type'    => 'post',
        'has_archive'        => true,
        'hierarchical'       => false,
        'menu_position'      => null,
        'supports'           => array( 'title' )
    );

    register_post_type( 'mapbox-map', $map_args );
}


function bub_add_maps_columns( $columns ) {
    $columns['shortcode'] = __( 'Shortcode', BUB_PLUGIN_NAME );
    return $columns;
}

function bub_mapbox_maps_column_content( $column, $post_id ) {
    if ( 'shortcode' === $column ) {
        echo '[mapbox-map id="' . $post_id . '"]';
    }
}