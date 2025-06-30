load('config.js');

function execute(url) {
    let response = fetch(url, {
        headers: {
            'referer': BASE_URL,
            'user-agent': USER_AGENT,
        }
    });
    if (response.ok) {
        return Graphics.createImage(response.base64())
    }

    return null;
}