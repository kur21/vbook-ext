load('config.js');

function execute(url, page) {
    if (!page) page = '1';
    var browser = Engine.newBrowser();
    browser.launch(BASE_URL + url + "?page=" + page, 10000);
    sleep(1000);
    const doc = browser.html();
    browser.close();

    if(!doc) return null;

    const data = []
    doc.select(".grid > figure").forEach(e => {
        const name = e.select("h3").text()
        const link = BASE_URL + e.select("a").first().attr("href")
        const description = `${e.select(".mt-2 > .mb-2 > a").first().text()} - ${e.select(".mt-2 > .mb-2 > span").first().text()}`
        const cover = e.select("img").attr("src");
        const host = BASE_URL;
        data.push({ name, link, description, cover, host });
    })
    const next = doc.select('.w-10.h-10.text-center.bg-blue-600 + .w-10.h-10.text-center').text()

    return Response.success(data, next)
}