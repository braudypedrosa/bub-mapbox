export async function get_unique_categories(locations) {
    try {
        const categories = locations.flatMap(item => item.category); // Extract all categories, flattening arrays
        const unique_categories = [...new Set(categories)];  // Remove duplicates using Set
        return unique_categories;
    } catch (error) {
        console.log(error);
    }
}

export async function get_location_details(locations) {
    let locations_info = [];

    try {
        const response = await jQuery.ajax({
            url: bub_mapbox_ajax.ajax_url,
            type: 'GET',
            dataType: 'json',
            data: {
                action: 'get_mapbox_locations',
                nonce: bub_mapbox_ajax.nonce,
                locations: locations
            }
        });

        if (response.success) {
            locations_info = response.data; 
        } else {
            console.log(response.data);
        }
    } catch (error) {
        console.log('AJAX request failed.');
    }

    return locations_info; 
}


