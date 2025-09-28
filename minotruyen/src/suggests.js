load('config.js');
function execute(input) {
    let doc = Html.parse(input);
    let data = [];
    doc.select("figure").forEach(e => {
        const name = e.select("h3").text()
        const link = BASE_URL + e.select("a").first().attr("href")
        const description = `${e.select(".mt-2 > .mb-2 > a").first().text()} - ${e.select(".mt-2 > .mb-2 > span").first().text()}`
        const cover = e.select("img").attr("src");
        const host = BASE_URL;
        data.push({ name, link, description, cover, host });
    });

    return Response.success(data);
}