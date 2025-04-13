load('config.js');

function execute(input) {
    let doc = Html.parse(input);
    let books = [];
    doc.select("article a.elementor-post__thumbnail__link").forEach(e => {
        books.push({
            name: e.select("h3").first().text(),
            link: e.attr("href"),
            cover: e.select(".elementor-portfolio-item__img img").attr("src"),
            description: e.select("time").text(),
            host: BASE_URL
        })
    });

    return Response.success(books);
}