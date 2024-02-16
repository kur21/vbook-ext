function execute(url, page) {
    if (!page) page = 1;
    const doc = page == 1 ? Http.get(url + '/').html() : Http.get(url + '/?page=' + `${page}`).html()

    var next = `${++page}`

    const el = doc.select("section#main > .excerpts-wrapper > .excerpts > .excerpt")

    const data = [];
    for (var i = 0; i < el.size(); i++) {
        var e = el.get(i);
        var imgCv = e.select(".thumbnail a.imgbox > div.imgbox").first().attr("style").split("'")[1]
        var thumb = 'https://xx-media.knit.bid' + imgCv
        data.push({
            name: e.select("h2 > a").first().text(),
            link: 'https://xx.knit.bid' + e.select("h2 > a").first().attr("href"),
            cover: thumb,
            description: e.select("footer > hot").text() + " --- " + e.select("footer > a.post-like > time").text(),
            host: "https://xx.knit.bid"
        })
    }

    return Response.success(data, next)
}