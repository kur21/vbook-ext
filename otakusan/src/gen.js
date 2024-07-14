function execute(url, page) {
    if(!page) page = 1;
    var filter = url.match(/otakusan.net\/[A-Za-z].+\/(.+)Newest/)[1];

    var doc = fetch(url, {
    method: "POST",
    body: {
        "Lang": "vn",
        "Page": page,
        "Type": "Include",
        "Dir": "NewPostedDate",
        "FilterCategory%5B0%5D": filter
    }}).html()

    let listBook = doc.select('.picture-card').map(book=>({
        name: book.select(".mdl-card__title a").attr("title"),
        link: book.select(".mdl-card__title a").attr("href"),
        cover: book.select(".mdl-card__title img").attr("src"),
        description: book.select(".btn-primary").last().text(),
        host: "https://otakusan.net"
    }))
    if (listBook.length == 0) next = ""; 
    else next = (parseInt(page) + 1).toString();

    return Response.success(listBook,next)
}

//https://otakusan.net/manga-detail/10455/voi-himeno-chan-thi-yeu-con-la-qua-som-do