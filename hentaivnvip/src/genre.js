function execute() {
    const doc = fetch("https://hentaivnvip.net").html();
    const el = doc.select('ul.genre li a');
    const data = [];
    el.forEach(e =>data.push({
           title: e.text(),
           input: e.attr('href'),
           script: 'gen.js'
        })
    )
    return Response.success(data);
}