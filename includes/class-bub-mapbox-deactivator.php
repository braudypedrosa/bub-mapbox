<?php

class BUB_Deactivator {

	/**
	 * Short Description. (use period)
	 *
	 * Long Description.
	 *
	 * @since    1.0.0
	 */
	public static function deactivate() {
		delete_option( BUB_PLUGIN_NAME . '_plugin_settings', $plugin_settings );
    	delete_option( BUB_PLUGIN_NAME . '_first_run', true );
	}

}