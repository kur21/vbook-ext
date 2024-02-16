function execute(url) {
    const doc = Http.get(url).html()
    return Response.success({
        name: doc.select("h1.focusbox-title").first().text(),
        cover: 'https://xx-media.knit.bid' + doc.select("section#main article.article-content .item-image img").first().attr("data-src"),
        author: "Đang cập nhật",
        description: doc.select("h1.focusbox-title").first().text(),
        detail: doc.select("h1.focusbox-title").first().text(),
        host: "https://xx.knit.bid",
        ongoing: true
    });
}