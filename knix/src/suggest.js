load('config.js');

function execute(input) {
    let doc = Html.parse(input);
    let books = [];
    doc.select("article.excerpt").forEach(e => {
        let cover = BASE_URL + e.select(".thumbnail a.imgbox img.imgbox-img").attr("src");
        books.push({
            name: e.select("h2 a").first().text(),
            link: BASE_URL + e.select("h2 a").first().attr("href"),
            cover: cover,
            description: e.select("time").text(),
            host: BASE_URL
        })
    });

    return Response.success(books);
}