function execute(url) {
    var doc = fetch(url).html();
    var chapters = doc.select(".chapter-list tbody > .chapter")
    var listChapter = []
    for( var i=chapters.size()-1; i>=0 ;i--){
        var ct = chapters.get(i).select(".read-chapter")
        listChapter.push({
            name: ct.select(".read-chapter").get(1).select("a").attr("alt"),
            url: ct.select(".read-chapter").get(1).select("a").attr("href"),
            host: "https://otakusan.net"
        })
    }
    return Response.success(listChapter);
}
//https://otakusan.net/chapter/1268234/voi-himeno-chan-thi-yeu-con-la-qua-som-do-chap-34