load('config.js');

function execute(key, page) {
    if (!page) page = '1';
    const doc = Http.get(BASE_URL + "/page/" + page + '/' ).params({"s": key}).html();

    var next = doc.select("nav.elementor-pagination").select("span.page-numbers.current + a").text().replace("Page", "")

    const el = doc.select(".elementor-posts-container article.elementor-post")

    const data = [];
    for (var i = 0; i < el.size(); i++) {
        var e = el.get(i);
        var imgCv = e.select("a.elementor-post__thumbnail__link .elementor-post__thumbnail img").attr("src")
        data.push({
            name: e.select("h3.elementor-post__title a").first().text(),
            link: e.select("h3.elementor-post__title a").first().attr("href"),
            cover: imgCv,
            description: e.select("span.elementor-post-date").first().text(),
            host: BASE_URL
        })
    }

    return Response.success(data, next)
}