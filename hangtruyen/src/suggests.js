load('config.js');
function execute(input) {
    let doc = Html.parse(input);
    let books = [];
    doc.select(".list-unstyled > li").forEach(e => {
        books.push({
            name: e.select("h3.m-name a").text(),
            link: e.select("h3.m-name a").attr("href"),
            cover: e.select(".p-thumb img").attr("data-src") || e.select(".p-thumb img").attr("data-original"),
            description: e.select(".chapter a").attr("title"),
            host: BASE_URL
        })
    });

    return Response.success(books);
}