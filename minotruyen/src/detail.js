load('config.js');

function execute(url) {
    url = url.replace(/^(?:https?:\/\/)?(?:[^@\n]+@)?(?:www\.)?([^:\/\n?]+)/img, BASE_URL);
    var browser = Engine.newBrowser();
    browser.launch(url, 10000);
    sleep(1000);
    const doc = browser.html();
    browser.close();

    if(!doc) return null;
    const elm = doc.select('article.px-3')
    const name = elm.select('h1').text()
    const author =  elm.select('h1 + *').text() || '(〜￣▽￣)〜' // altName replace author
    const genres = elm.select('.flex.flex-wrap.gap-2 > a.uppercase').map(e => {
        return {
            title: e.text(),
            input: e.attr('href'),
            script: "gen.js"
        }
    })
    const description = elm.select('p.text-base.whitespace-pre-line')
    const cover = elm.select('img').first().attr('src')
    const suggests = [
        {
            title: "Truyện cùng thể loại",
            input: doc.select('h2[title="TRUYỆN CÙNG THỂ LOẠI"] + div.grid'),
            script: "suggests.js"
        }
    ]
    const detail = `Tên truyện: ${name} <br>Tên khác: ${author}`
    const ongoing = true
    const host = BASE_URL

    return Response.success({ name, author, genres, description, cover, suggests, detail, ongoing, host })
}