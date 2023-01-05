load('src.js');
function execute() {
    const doc = Http.get(src).html();
    const el = doc.select(".mt-2 a");
    const data = [];
    for (var i = 0; i < el.size(); i++) {
        var e = el.get(i);
        data.push({
           title: e.text(),
           input: src + e.attr('href'),
           script: 'cat.js'
        });
    }
    return Response.success(data);
}