function execute(url) {
    var doc = Http.get(url).html();
    var el = doc.select(".elementor-widget-container > p > img");
    var data = [];
    for (var i = 0; i < el.size(); i++) {
        var e = el.get(i);
        var img = e.attr("src");
        data.push(img);
    }
    return Response.success(data);
}