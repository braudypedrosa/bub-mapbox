<?php

function bub_mapbox_settings() {
    return get_option(BUB_PLUGIN_NAME . '_plugin_settings') ? json_decode(get_option(BUB_PLUGIN_NAME . '_plugin_settings')) : '';
}

function bub_mapbox_slugify($text) {
    return strtolower(trim(preg_replace('~[^\\pL\d]+~u', '-', iconv('utf-8', 'us-ascii//TRANSLIT', $text)), '-'));
}

function bub_mapbox_unslugify($slug) {
    return ucwords(str_replace('-', ' ', $slug));
}


function displayNotice($code, $message) {

    if(isset($code)) { 

        switch($code) {
            case 'success': 
                $notice_class = 'notice-success';
                break;
            case 'fail': 
                $notice_class = 'notice-error';
                break;
        }
        
        echo '<div class="notice ' . $notice_class . '">
                <p>' . $message . '</p>
            </div>';
    }
}

function displayMessage($response) {
    return '<div class="response-notice '.$response['code'].'">'.$response['message'].'</div>';
}

function bub_mapbox_get_lat_long_from_address($address) {
    $apiKey = 'AIzaSyDrgKGYvYwL1tV68mmv7Q_wCB8muFkmMBE'; // Replace with your actual API key
    $address = urlencode($address);
    $url = "https://maps.googleapis.com/maps/api/geocode/json?address={$address}&key={$apiKey}";

    $response = wp_remote_get($url);

    if (is_wp_error($response)) {
        error_log('Error fetching data from Google API: ' . $response->get_error_message());
        return false;
    }

    $body = wp_remote_retrieve_body($response);
    $data = json_decode($body);

    if (json_last_error() !== JSON_ERROR_NONE) {
        error_log('JSON decode error: ' . json_last_error_msg());
        return false;
    }

    if (empty($data->results)) {
        error_log('No results found for the address: ' . urldecode($address));
        return false;
    }

    $location = $data->results[0]->geometry->location;
    $lat = $location->lat;
    $lng = $location->lng;

    return array('lat' => $lat, 'lng' => $lng);
}


function get_mapbox_location_ids() {
    $args = array(
        'post_type'      => 'mapbox-location',
        'posts_per_page' => -1, // Retrieve all posts
        'fields'         => 'ids', // Only get post IDs
    );

    $location_ids = get_posts($args);

    return $location_ids; // This will be an array of post IDs
}


function check_plugin_settings() {
    $settings = bub_mapbox_settings();

    $required_settings = array(
        'mapbox_token',
        'mapbox_style',
    );

    foreach ($required_settings as $setting) {
        if (empty($settings->$setting)) {
            return false;
        }
    }

    return true;
}
