function execute(url) {
    var doc = fetch("https://otakusan.net/Home/ViewDailyRanking?region=vn").html()

    var listID = doc.select(".rank").map(e=>({
        id: e.attr("data-super-id"),
        link: e.attr("href").replace(/chapter\/\d+/,"manga-detail/"+ e.attr("data-super-id")).replace(/-chap-(\d+)/,'')
    }))
    //return Response.success(listID)
    //return Response.success(listID.get(0).id)
    var listBook = []
    listID.forEach(book=>{
        var getInfo = fetch("https://otakusan.net/Manga/PopupDetail/" + book.id).html()
        listBook.push({
            name: getInfo.select(".header").text(),
            link: book.link,
            cover: getInfo.select(".img-contain img").attr("src"),
            description: getInfo.select(".summary").text(),
            host: "https://otakusan.net",
            script: "detail.js"
        });
    })
    return Response.success(listBook)
    
}


