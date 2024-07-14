function execute(url,page) {
    if(!page) page = 1
    var genreID = url.match(/(\d+)/)[1]
    var doc = fetch("https://otakusan.net/Genre/MangaGenrePartial?id="+genreID+"&offset="+((page-1)*24).toString()+"&pagesize=24&lang=vn&key").html()

    let listBook = doc.select('.picture-card').map(book=>({
        name: book.select(".mdl-card__title a").attr("title"),
        link: book.select(".mdl-card__title a").attr("href"),
        cover: book.select(".mdl-card__title img").attr("src"),
        description: book.select(".btn-primary").last().text(),
        host: "https://otakusan.net"
    }))
    if (listBook.length == 0) next = ""; 
    else next = parseInt(page) + 1

    return Response.success(listBook,next)
}