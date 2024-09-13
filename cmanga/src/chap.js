load('config.js');
function execute(url) {
    url = url.replace(/^(?:https?:\/\/)?(?:[^@\n]+@)?(?:www\.)?([^:\/\n?]+)/img, BASE_URL);
    let res = fetch(BASE_URL + '/assets/inc/module//other/chapter_detail.php', {
        method: 'POST'
    })
    if(res.ok) {
        let response = fetch(url);
        if (response.ok) {
            let data = response.json();
            return Response.success(data);
        }
        return null;
    }
    return null;
}