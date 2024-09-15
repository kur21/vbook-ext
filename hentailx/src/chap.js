load('src.js');
function execute(url) {
    url = url.replace(/^(?:https?:\/\/)?(?:[^@\n]+@)?(?:www\.)?([^:\/\n?]+)/img, BASE_URL);
    var doc = fetch(url).html();
    var el = doc.select(".text-center .lazy");
    var imgs = [];
    for (var i = 0; i < el.size() - 1; i++) {
        var link = el.get(i).attr("data-src");
        if (link.indexOf("banners") < 0) {
            imgs.push(link.trim())
        }
    }
    return Response.success(imgs);
}