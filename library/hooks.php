<?php 

add_action('wp_insert_post', BUB_PLUGIN_NAME . '_geolocate_address', 10, 3);

function bub_mapbox_geolocate_address($post_id, $post, $update) {

    if ($post->post_status === 'trash' || $post->post_status === 'deleted') {
        return; // Exit the function if the post is being trashed or deleted
    }

    $address = get_field('address', $post_id);
    $coordinates = get_field('coordinates', $post_id);

    if($address) {
        error_log('Address found for post: ' . $post->post_title . '(ID: '.$post_id.')');

        if( empty($coordinates['latitude']) || empty($coordinates['longitude']) ) {
            error_log('Coordinate not found! Running geolocation!');

            $new_coordinates = get_lat_long_from_address($address);
            
            update_field('coordinates', array(
                'latitude' => $new_coordinates['lat'],
                'longitude' => $new_coordinates['lng']
            ), $post_id);

            error_log('Assigned new coordinates: ' . print_r($new_coordinates, true));
        }
    }
}