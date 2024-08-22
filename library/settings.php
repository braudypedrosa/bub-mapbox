<?php 

add_action('admin_post_save_bub_mapbox_settings', 'save_settings');

function save_settings() {

    unset($_POST['action']);

    $plugin_settings = json_encode($_POST);

    update_option( BUB_PLUGIN_NAME . '_plugin_settings', $plugin_settings );
    
    $response = array(
        'code' => 'success',
        'message' => 'Settings saved successfully!'
    );
    

    header("Location: " . get_bloginfo("url") . "/wp-admin/admin.php?page=locations-settings&status=".$response['code']."&msg=".$response['message']);
    exit;
}