export function unslugify(slug) {
    return slug
        .split(/[-_]/)  
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))  
        .join(' ');
}

export function slugify(text) {
    return text
        .toString()
        .toLowerCase()
        .trim()
        .replace(/[^a-z0-9\s-]/g, '')
        .replace(/\s+/g, '-')
        .replace(/-+/g, '-');
}

export function calculate_map_center(locations) {
    let totalLat = 0;
    let totalLng = 0;
    let count = 0;

    locations.forEach(location => {
        const lat = parseFloat(location.lat);
        const lng = parseFloat(location.lng);

        if (!isNaN(lat) && !isNaN(lng)) {
            totalLat += lat;
            totalLng += lng;
            count++;
        }
    });

    const centerLat = totalLat / count;
    const centerLng = totalLng / count;

    return { lat: centerLat, lng: centerLng };
}

export function get_geojson( json_array ) {
    return {
        "type": "FeatureCollection",
        "features": json_array.map(item => ({
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [parseFloat(item.lng), parseFloat(item.lat)]
            },
            "properties": {
                "title": item.title,
                "description": item.description,
                "address": item.address,
                "phone": item.phone,
                "website": item.website,
                "category": item.category,
                "distance" : item.distance,
                "walktime" : item.walktime,
                "source": item.source
            }
        }))
    };
}