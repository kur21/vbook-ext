
load('config.js');

function execute(url, page) {
    if (!page) page = 1;
    const doc = page == 1 ? Http.get(url + '/').html() : Http.get(url + '/?page=' + `${page}`).html()

    var next = `${++page}`

    const el = doc.select("section#main > .excerpts-wrapper > .excerpts > .excerpt")

    const data = [];
    for (var i = 0; i < el.size(); i++) {
        var e = el.get(i);
        var thumb = BASE_URL + e.select(".thumbnail a.imgbox img.imgbox-img").attr("src");
        data.push({
            name: e.select("h2 > a").first().text(),
            link: BASE_URL + e.select("h2 > a").first().attr("href"),
            cover: thumb,
            description: e.select("footer > hot").text() + " views - " + e.select("footer > a.post-like > time").text(),
            host: BASE_URL
        })
    }

    return Response.success(data, next)
}