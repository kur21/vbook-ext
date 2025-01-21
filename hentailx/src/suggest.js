load('config.js');
function execute(input) {
    let doc = Html.parse(input);
    Console.log(doc)
    let books = [];
    doc.select(".flex.gap-2.w-full").forEach(e => {
        books.push({
            name: e.select("a").first().text(),
            link: BASE_URL + e.select("a").first().attr("href"),
            cover: e.select(".rounded-md.cover-sm").attr("data-bg"),
            description: e.select(".text-sm").text(),
            host: BASE_URL
        })
    });

    return Response.success(books);
}