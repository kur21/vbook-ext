
load('config.js');

function execute(input) {
    let doc = Html.parse(input);
    let books = [];
    doc.select("article.related-post").forEach(e => {
        books.push({
            name: e.select(".related-post-title a").first().text(),
            link: e.select(".related-post-title a").first().attr("href"),
            cover: e.select(".related-thumb img").first().attr("src"),
            description: e.select("time.published").text(),
            host: BASE_URL
        })
    });

    return Response.success(books);
}