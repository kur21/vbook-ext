load('src.js');
function execute(url) {
    let doc = fetch(url).html();
    let el = doc.select(".mb-4 > ul > a")
    const data = [];
    for (var i = el.size() - 1; i >= 0; i--) {
        var e = el.get(i);
        data.push({
            name: e.select(".text-ellipsis").text(),
            url: src + e.attr("href"),
            host: src
        })
    }
    return Response.success(data);
}