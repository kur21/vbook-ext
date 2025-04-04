load('config.js');

function execute(url) {
    url = url.replace(/^(?:https?:\/\/)?(?:[^@\n]+@)?(?:www\.)?([^:\/\n?]+)/img, BASE_URL);
    let response = fetch(url);
    
    if (response.ok) {
        let doc = response.html();
        var data = [];
        var imgs = doc.select("#manga-images .mi-item img");
        for (var i = 0; i < imgs.size(); i++) {
            let e = imgs.get(i);
            let link = e.attr("data-src") || e.attr("src")
            data.push(link);
        }
        return Response.success(data);
    }
    return null;
}
