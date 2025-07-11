load('config.js');

function execute(url) {
    url = url.replace(/^(?:https?:\/\/)?(?:[^@\n]+@)?(?:www\.)?([^:\/\n?]+)/img, BASE_URL);
    var response = fetch(url);

    if(response.ok) {
        var doc = response.html()
        var list = [];
        var el = doc.select("#nt_listchapter nav .chapter > a");
        for (var i = el.size() - 1; i >= 0; i--) {
            var e = el.get(i);
            list.push({
                name: e.text(),
                url: e.attr("href").includes('http') ? e.attr("href") : BASE_URL + e.attr("href"),
                host: BASE_URL,
            });
        }
        return Response.success(list);
    }

    return null;
}