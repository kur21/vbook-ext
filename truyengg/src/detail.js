load('config.js');
function execute(url) {
    url = url.replace(/^(?:https?:\/\/)?(?:[^@\n]+@)?(?:www\.)?([^:\/\n?]+)/img, BASE_URL);
    var doc = fetch(url).html();
    if (doc) {
        var cover = doc.select(".thumbblock img").first().attr("src");
        if (cover.startsWith("//")) {
            cover = "http:" + cover;
        }

        let genres = [];
        doc.select(".info_tale a.clblue").forEach(e => {
            genres.push({
                title: e.text(),
                input: e.attr('href').replace(BASE_URL, ''),
                script: "gen.js"
            });
        });

        return Response.success({
            name: doc.select("h1[itemprop=name]").text(),
            cover: cover,
            host: BASE_URL,
            author: doc.select("p:contains(Tác Giả) + p").text(),
            description: doc.select("div.story-detail-info").html(),
            detail: "Theo dõi: "+doc.select("p:contains(Theo Dõi) + p").text()+'<br>Lượt Xem: '+doc.select("p:contains(Lượt Xem) + p").text(),
            ongoing: doc.select("p:contains(Trạng Thái) + p").text().indexOf("Đang Cập Nhật") >= 0,
            genres: genres
        });
    }

    return null;
}