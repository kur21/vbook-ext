function execute(key, page) {

    var doc =  fetch("https://otakusan.net/Home/Search?search=" + key).html()

    var listBook = doc.select(".picture-card").map(book=>({
        name: book.select(".mdl-card__title a").attr("title"),
        link: book.select(".mdl-card__title a").attr("href"),
        cover: book.select(".mdl-card__title img").attr("src"),
        description: "Last chapter: " + book.select(".mdl-card__actions a").text(),
        host: "https://otakusan.net"   
    }))

    return Response.success(listBook)
}