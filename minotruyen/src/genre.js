load('config.js');

function execute() {
    var browser = Engine.newBrowser();
    browser.launch(FULL_URL, 10000);
    sleep(1000);
    const doc = browser.html();
    browser.close();
    if(!doc) return null;

    let els = doc.select('ul.grid.grid-cols-2.pb-5 > li > a')
    let data = []
    els && els.forEach(e => {
        data.push({
            title: e.text(),
            input: e.attr('href'),
            script: 'gen.js'
        })
    })
    return Response.success(data)
}