load('config.js');

function execute(url) {
    let response = fetch(url, {
        headers: {
            'referer': BASE_URL,
            'user-agent': USER_AGENT,
        }
    });
    if (response.ok) {
        // let base64String = response.base64();
        return url
    }

    return null;
}