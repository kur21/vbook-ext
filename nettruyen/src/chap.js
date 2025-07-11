load('config.js');

function execute(url) {
    url = url.replace(/^(?:https?:\/\/)?(?:[^@\n]+@)?(?:www\.)?([^:\/\n?]+)/img, BASE_URL);
    var response = fetch(url)

    if (response.ok) {
        var doc = response.html()
        var imgs = doc.select(".reading-detail.box_doc").last().select('.page-chapter > img');
        Console.log(imgs.size())
        var data = [];
        for (var i = 1; i < imgs.size() - 1; i++) {
            let e = imgs.get(i);
            Console.log(e)
            let fallback = []
            if(e.attr("data-src")) fallback.push(e.attr("data-src"))
            if(e.attr("data-original")) fallback.push(e.attr("data-original"))
            data.push({
                link: e.attr("src"),
                fallback: fallback,
                Referer: BASE_URL
            });
        }
        return Response.success(data);
    }
    return null;
}
