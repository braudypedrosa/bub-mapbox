<?php

add_action('wp_ajax_get_mapbox_locations', 'bub_get_mapbox_locations');
add_action('wp_ajax_nopriv_get_mapbox_locations', 'bub_get_mapbox_locations');

function bub_get_mapbox_locations() {

    // Get the locations parameter
    $locations_param = isset($_GET['locations']) ? $_GET['locations'] : 'all';

    // Set up the query arguments
    $args = array(
        'post_type'      => 'mapbox-location',
        'posts_per_page' => -1, // Retrieve all posts by default
    );

    // If locations is not 'all' and is an array, filter by the given IDs
    if ($locations_param !== 'all' && is_array($locations_param)) {
        $args['post__in'] = $locations_param; // Only get posts with the given IDs
    }

    // Query the posts
    $mapbox_locations = get_posts($args);
    $mapbox_details = array();

    if ($mapbox_locations) {
        foreach ($mapbox_locations as $post) {
            setup_postdata($post);
            
            $id = $post->ID;

            $title = $post->post_title;
            $description = get_field('short_description', $id);
            $address = get_field('address', $id);
            $phone = get_field('phone_number', $id);
            $website = get_field('website', $id);
            $coordinates = get_field('coordinates', $id);
            $distance = get_field('distance', $id);
            $walktime = get_field('walk_time', $id);
            $marker_color = get_field('marker_color', $id) ? get_field('marker_color', $id) : '#0C8EDF';

            $category = get_the_terms($id, 'mapbox_category')[0];

            $lat = isset($coordinates['latitude']) ? $coordinates['latitude'] : '';
            $lng = isset($coordinates['longitude']) ? $coordinates['longitude'] : '';
            $source = 'cache';

            // If lat and lng are not set, get them from the address
            if (empty($lat) || empty($lng)) {
                
                // get lat and lng from address
                if($address) {
                    $lat_long = get_lat_long_from_address($address);
                    $lat = $lat_long['lat'];
                    $lng = $lat_long['lng'];
                    $source = 'API';
                }
                
                // Update the post meta with the retrieved lat and lng
                update_field('coordinates', array(
                    'latitude' => $lat,
                    'longitude' => $lng
                ), $id);
            }

            if($address) {
                $mapbox_details[] = array(
                    'title'       => $title,
                    'description' => $description,
                    'address'     => $address,
                    'phone'       => $phone,
                    'website'     => $website,
                    'lat'         => $lat,
                    'lng'         => $lng,
                    'distance'    => $distance,
                    'walktime'    => $walktime,
                    'category'    => $category->name,
                    'source'      => $source,
                    'marker_color' => $marker_color
                );
            }
        }

        wp_reset_postdata(); // Always reset the post data after a custom query
    }

    // Return the array of locations as a JSON response
    wp_send_json_success($mapbox_details);
}


function bub_mapbox_categories() {

    // Query for all non-empty terms in 'mapbox_category' taxonomy
    $terms = get_terms(array(
        'taxonomy' => 'mapbox_category',
        'hide_empty' => true, // This ensures only non-empty terms are returned
    ));

    // Prepare an array to hold the term names
    $term_names = array();

    if (!empty($terms) && !is_wp_error($terms)) {
        foreach ($terms as $term) {
            $term_names[] = $term->name;
        }
    }

    // Return the array of names as a JSON response
    wp_send_json_success($term_names);

    // Always die in the AJAX function
    wp_die();
}