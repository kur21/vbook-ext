function execute(url) {
    var doc = fetch(url).html()

    var el = doc.select("div.row .manga-top")
    return Response.success({
        name: el.select(".manga-top-main .manga-top-info h1").text(),
        cover: el.select(".col-lg-3 .manga-top-img img").attr("src"),
        host: "https://otakusan.net",
        author: el.select(".table-striped tr").get(4).select("td").text(),
        description: el.select(".summary").text().replace("Xem Thêm",""),
        detail: "Tên khác: " +  el.select(".table-striped tr").get(1).select("td").text() + "<br>"
        + "Author: " +  el.select(".table-striped tr").get(4).select("td").text()+ "<br>"
        + "Thể loại: " +  el.select(".table-striped tr").get(3).select("td").text()
        
    });

}