load('config.js');
function execute(url) {
    let response = fetch(url, {
    headers: {
        'Referer': BASE_URL,
        'Origin': BASE_URL
    }
    });
    if (response.ok) {
        return Graphics.createImage(response.base64())
    }

    return null;
}