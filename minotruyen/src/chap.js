load('config.js');

function execute(url) {
    url = url.replace(/^(?:https?:\/\/)?(?:[^@\n]+@)?(?:www\.)?([^:\/\n?]+)/img, BASE_URL);
    var browser = Engine.newBrowser();
    browser.launch(url, 10000);
    sleep(1000);
    const doc = browser.html();
    browser.close();
    if(!doc) return null;

    const data = doc.select('div[id^="chap-img"] img').map(e => e.attr('src'))
    return Response.success(data);
}
