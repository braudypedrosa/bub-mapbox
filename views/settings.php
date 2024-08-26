<?php 

$plugin_settings = get_plugin_settings();

?>

<div class="bub_mapbox_settings_page">

    <?php if(isset($_GET['status'])) {
        displayNotice($_GET['status'], $_GET['msg']);
    } ?>

    <h2>Mapbox Settings</h2>

    <form class="bubmapbox-form" method="post" action="<?php echo admin_url('admin-post.php'); ?>">

        <input type="hidden" name="action" value="save_bub_mapbox_settings" />

        <div class="form-floating mb-3">
            <input type="text" class="form-control" required name="mapbox_token" value="<?= $plugin_settings->mapbox_token; ?>" placeholder="Mapbox Access Token">
            <label>Mapbox Access Token (required)</label>
        </div>

        <div class="form-floating mb-3">
            <input type="text" class="form-control" name="mapbox_style" value="<?= $plugin_settings->mapbox_style; ?>" placeholder="Style">
            <label>Style</label>
            <span>Place style url from mapbox, if left empty a default style will be used.</span>
        </div>

        <div class="mt-3">
            <button type="submit" class="btn btn-primary">Save Settings</button>
        </div>

    </form>

</div>