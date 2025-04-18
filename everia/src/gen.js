load('config.js');

function execute(url, page) {
    if (!page) page = '1';
    const doc = Http.get(url + '/page/' + page).html()

    var next = doc.select("ul.page-numbers").select("li:has(.page-numbers.current) + li").text()

    const el = doc.select("#content #blog-entries .blog-entry")

    const data = [];
    for (var i = 0; i < el.size(); i++) {
        var e = el.get(i);
        var imgCv = e.select(".thumbnail a.thumbnail-link img").first().attr("data-src")
        if(!imgCv) {
            imgCv = e.select(".thumbnail a.thumbnail-link img").first().attr("src")
        }
        data.push({
            name: e.select("h2.blog-entry-title.entry-title a").first().text(),
            link: e.select("h2.blog-entry-title.entry-title a").first().attr("href"),
            cover: imgCv,
            description: "",
            host: BASE_URL
        })
    }

    return Response.success(data, next)
}