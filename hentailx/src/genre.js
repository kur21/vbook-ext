load('config.js');
function execute() {
    const doc = Http.get(BASE_URL).html();
    const el = doc.select(".mt-2 a");
    const data = [
        {
            input: BASE_URL + "/the-loai/manhwa?sort=-updated_at&page=1&filter%5Bstatus%5D=1",
            title: 'Manhwa đã hoàn thành',
            script: 'cat.js'
        }
    ];
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