<?php 

add_action( 'init', 'register_custom_post_type' );

function register_custom_post_type() {

    $labels = array(
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

    $args = array(
        'labels'             => $labels,
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
        'supports'           => array( 'title', 'editor', 'thumbnail', 'excerpt' )
    );

    register_post_type( 'mapbox-location', $args );
}


