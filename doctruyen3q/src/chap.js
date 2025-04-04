load('config.js');
function execute(url) {
    url = url.replace(/^(?:https?:\/\/)?(?:[^@\n]+@)?(?:www\.)?([^:\/\n?]+)/img, BASE_URL);
    let response = fetch(url);
    if (response.ok) {
        let doc = response.html();
        let imgs = [];
        doc.select(".list-image-detail .page-chapter[id^=page_] img").forEach(e => {
            let url = e.attr("src") || e.attr("data-original");
            if(url) imgs.push(url);
        });
        return Response.success(imgs);
    }
    return null;
}