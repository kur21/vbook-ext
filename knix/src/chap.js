function execute(url) {
    var doc = Http.get(url).html();
    var el = doc.select("section#main article.article-content .item-image img");
    var data = [];
    for (var i = 0; i < el.size(); i++) {
        var e = el.get(i);
        var img = e.attr("data-src");
        if (!img) {
            img = e.attr("src");
        }
        data.push('https://xx-media.knit.bid' + img);
    }
    return Response.success(data);
}