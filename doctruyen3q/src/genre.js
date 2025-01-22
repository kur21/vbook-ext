load('config.js');
function execute() {
    let response = fetch(BASE_URL);
    if (response.ok) {
        let doc = response.html();
        const data = [];
        doc.select('a.category-detail-1').forEach(e => data.push({
            title: e.text(),
            input: e.attr('href'),
            script: 'gen.js'
        }));
        return Response.success(data);
    }
    return null;
}