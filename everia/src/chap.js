function execute(url) {
    var doc = Http.get(url).html();
    var el = doc.select(".wp-block-gallery .wp-block-image img");
    var data = [];
    for (var i = 0; i < el.size(); i++) {
        var e = el.get(i);
        var img = e.attr("data-src") || e.attr("src");
        data.push(img);
    }
    return Response.success(data);
}