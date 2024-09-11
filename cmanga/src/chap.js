load('config.js');
function execute(url) {
    url = url.replace(/^(?:https?:\/\/)?(?:[^@\n]+@)?(?:www\.)?([^:\/\n?]+)/img, BASE_URL);
    // let time = Math.floor(new Date().getTime() / 1000).toString()
    // Console.log(url + '&v=' + 1723040847)
    // let response = fetch(url + '&v=' + time);
    let response = fetch(url);
    Console.log(url)
    if (response.ok) {
        let data = response.json();
        return Response.success(data);
    }
    return null;
}