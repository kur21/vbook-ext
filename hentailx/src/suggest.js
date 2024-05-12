load('src.js');
function execute(input) {
    let doc = Html.parse(input);
    Console.log(doc)
    let books = [];
    doc.select(".flex.gap-2.w-full").forEach(e => {
        const img = e.select(".rounded-md.cover-sm").attr("style")
        const img_url = img.replace(/background-image: url\('([^)]+)'\)/, '$1')
        books.push({
            name: e.select("a").first().text(),
            link: BASE_URL + e.select("a").first().attr("href"),
            cover: img_url,
            description: e.select(".text-sm").text(),
            host: BASE_URL
        })
    });

    return Response.success(books);
}