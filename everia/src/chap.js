function execute(url) {
    var doc = Http.get(url).html();
    var el = doc.select(".wp-block-gallery .wp-block-image img");
    var data = [];
    for (var i = 0; i < el.size(); i++) {
        var e = el.get(i);
        var img = e.attr("data-src");
        if (!img) {
            img = e.attr("src");
        } else {
            data.push(img);
        }
    }
    return Response.success(data);
}