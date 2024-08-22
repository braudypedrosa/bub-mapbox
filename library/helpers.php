<?php

function get_plugin_settings() {
    return get_option(BUB_PLUGIN_NAME . '_plugin_settings') ? json_decode(get_option(BUB_PLUGIN_NAME . '_plugin_settings')) : '';
}

function slugify($text) {
    return strtolower(trim(preg_replace('~[^\\pL\d]+~u', '-', iconv('utf-8', 'us-ascii//TRANSLIT', $text)), '-'));
}

function unslugify($slug) {
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

