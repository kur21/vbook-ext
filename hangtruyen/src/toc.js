load('config.js');
function execute(url) {
    url = url.replace(/^(?:https?:\/\/)?(?:[^@\n]+@)?(?:www\.)?([^:\/\n?]+)/img, BASE_URL);
    let response = fetch(url);
    
    if(response.ok) {
        let doc = response.html();
        var list = [];
        var el = doc.select(".list-chapters .l-chapter");
        for (var i = el.size() - 1; i >= 0; i--) {
            var e = el.get(i);
            list.push({
                name: e.select('a.ll-chap').text() + ' - ' + e.select('span.ll-update').first().text(),
                url: e.select('a.ll-chap').attr("href"),
                host: BASE_URL,
            });
        }
        return Response.success(list);
    }

    return null;
}