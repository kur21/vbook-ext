function execute(url, page) {
    if(!page) page = 1;

    var doc = fetch(url, {
    method: "POST", 
    body: {
        "Lang": "vn",
        "Page": page,
        "Type": "Include",
        "Dir": "CreatedDate"
    }
    }).html()
    var listBook = [];

    let listBook = doc.select('.picture-card').map(book=>({
        name: book.select(".mdl-card__title img").attr("title"),
        link: book.select(".mdl-card__title a").attr("href"),
        cover: book.select(".mdl-card__title img").attr("src"),
        description: book.select(".btn-primary").last().text(),
        host: "https://otakusan1.net"
    }))
    if (listBook.length == 0) next = ""; 
    else next = (parseInt(page) + 1).toString();

    return Response.success(listBook,next)
}