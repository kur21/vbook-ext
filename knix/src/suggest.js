function execute(input) {
    let doc = Html.parse(input);
    let books = [];
    doc.select("article.excerpt").forEach(e => {
        let thumb_el = e.select(".thumbnail a.imgbox .imgbox").first()
        let thumb = `${thumb_el}`.match(/background-image:url\(['"]?(.*?)['"]?\)/);
        let cover = thumb ? thumb[1] : null;
        books.push({
            name: e.select("h2 a").first().text(),
            link: 'https://xx.knit.bid' + e.select("h2 a").first().attr("href"),
            cover: 'https://xx.knit.bid' + cover,
            description: e.select("time").text(),
            host: 'https://xx.knit.bid'
        })
    });

    return Response.success(books);
}