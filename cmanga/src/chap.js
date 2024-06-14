load('config.js');
function execute(url) {
    url = url.replace(/^(?:https?:\/\/)?(?:[^@\n]+@)?(?:www\.)?([^:\/\n?]+)/img, BASE_URL);
    let response = fetch(url + '&v=0');
    if (response.ok) {
        let data = response.json();
        return Response.success(data);
    }
    return null;
}