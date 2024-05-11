load('config.js');
function execute(url) {
    let response = fetch(url + '&v=0');
    if (response.ok) {
        let data = response.json();
        return Response.success(data);
    }
    return null;
}