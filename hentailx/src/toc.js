load('src.js');
function execute(url) {
    let doc = fetch(url).html();
    let el = doc.select(".mb-4 > ul > a")
    const data = [];
    for (var i = el.size() - 1; i >= 0; i--) {
        var e = el.get(i);
        data.push({
            name: e.select(".text-ellipsis").text(),
            url: BASE_URL + e.attr("href"),
            host: BASE_URL
        })
    }
    return Response.success(data);
}