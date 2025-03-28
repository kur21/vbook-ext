load('config.js');

function execute(url) {
    let response = fetch(url, {
        headers: {
            'referer': BASE_URL
        }
    });
    if (response.ok) {
        return Graphics.createImage(response.base64())
    }

    return null;
}