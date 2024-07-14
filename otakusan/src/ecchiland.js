function execute(url, page) {
    if(!page) page = 1;

    var doc = fetch(url, {
    method: "POST", 
    body: {
        "Lang": "vn",
        "Page": page,
        "Type": "1",
        "Dir": "NewPostedDate",
        "filterCategory": "All"
    }
    }).html()
    var listBook = [];

    let listBook = doc.select('.picture-card').map(book=>({
        name: book.select(".mdl-card__supporting-text h4 a").text(),
        link: book.select(".mdl-card__title a").attr("href"),
        cover: book.select(".mdl-card__title img").attr("src"),
        description: book.select(".btn-primary").last().text(),
        host: "https://otakusan.net"
    }))
    if (listBook.length == 0) next = ""; 
    else next = (parseInt(page) + 1).toString();

    return Response.success(listBook,next)
}