<?php 

$plugin_settings = get_plugin_settings();

?>

<div class="bub_mapbox_settings_page">

    <?php displayNotice($_GET['status'], $_GET['msg']); ?>

    <h2>Mapbox Settings</h2>

    <form class="bubmapbox-form" method="post" action="<?php echo admin_url('admin-post.php'); ?>">

        <input type="hidden" name="action" value="save_bub_mapbox_settings" />

        <div class="form-floating mb-3">
            <input type="text" class="form-control" required name="mapbox_token" value="<?= $plugin_settings->mapbox_token; ?>" placeholder="Mapbox Access Token">
            <label for="mapboxAccessToken">Mapbox Access Token (required)</label>
        </div>

        <div class="form-floating mb-3">
            <input type="text" class="form-control" name="mapbox_style" value="<?= $plugin_settings->mapbox_style; ?>" placeholder="Style">
            <label for="mapStyle">Style</label>
            <span>Place style url from mapbox, if left empty a default style will be used.</span>
        </div>

        <h5>Center Coordinates</h5>
        <div class="row g-2">
            <div class="col-md">
                <div class="form-floating">
                <input type="text" class="form-control" required name="mapbox_latitude" value="<?= $plugin_settings->mapbox_latitude; ?>" placeholder="Latitude">
                <label for="latitude">Latitude (required)</label>
                </div>
            </div>
            <div class="col-md">
                <div class="form-floating">
                <input type="text" class="form-control" required name="mapbox_longitude" value="<?= $plugin_settings->mapbox_longitude; ?>" placeholder="Longitude">
                <label for="longitude">Longitude (required)</label>
                </div>
            </div>
        </div>

        <div class="mt-3">
            <button type="submit" class="btn btn-primary">Save Settings</button>
        </div>

    </form>

</div>