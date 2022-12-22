load('bypass.js');

function execute(url) {

    var doc = bypass(url, Http.get(url).html());
    if (doc) {
        var cover = doc.select(".book_avatar img").first().attr("src");
        if (cover.startsWith("//")) {
            cover = "http:" + cover;
        }
        return Response.success({
            name: doc.select("h1[itemprop=name]").text(),
            cover: cover,
            host: "https://truyenqqhot.com",
            author: doc.select("a.org").text(),
            description: doc.select("div.story-detail-info").html(),
            detail: doc.select(".book_info div.txt").first().html(),
            ongoing: doc.select(".book_info div.txt").html().indexOf("Đang Cập Nhật") >= 0
        });
    }

    return null;
}