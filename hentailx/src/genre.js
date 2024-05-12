load('src.js');
function execute() {
    const doc = Http.get(BASE_URL).html();
    const el = doc.select(".mt-2 a");
    const data = [];
    for (var i = 0; i < el.size(); i++) {
        var e = el.get(i);
        data.push({
           title: e.text(),
           input: BASE_URL + e.attr('href'),
           script: 'cat.js'
        });
    }
    return Response.success(data);
}