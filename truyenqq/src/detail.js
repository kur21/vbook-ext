load('bypass.js');
load('config.js');
function execute(url) {
    url = url.replace(/^(?:https?:\/\/)?(?:[^@\n]+@)?(?:www\.)?([^:\/\n?]+)/img, BASE_URL);
    var doc = bypass(url, Http.get(url).html());
    if (doc) {
        var cover = doc.select(".book_avatar img").first().attr("src");
        if (cover.startsWith("//")) {
            cover = "https:" + cover;
        }

        let genres = []
        doc.select(".list01 .li03 a").forEach(e => {
            genres.push({
                title: e.text(),
                input: e.attr('href').replace(/^https?:\/\/[^\/]+/, ''),
                script: "gen.js"
            });
        });
        

        return Response.success({
            name: doc.select("h1[itemprop=name]").text(),
            cover: cover,
            host: BASE_URL,
            author: doc.select("a.org").text(),
            description: doc.select("div.story-detail-info").html(),
            detail: 'Tên khác: ' + doc.select(".book_info .list-info .othername h2").text() +
            '<br>Tác giả: ' + doc.select(".book_info .list-info .author a.org").text() +
            '<br>Tình trạng: ' + doc.select(".book_info .list-info .status .col-xs-9").text() +
            '<br>Lượt thích: ' + doc.select(".book_info .list-info .row .number-like").text() +
            '<br>Lượt theo dõi: ' + doc.select(".book_info .list-info .row:nth-last-child(2) .col-xs-9").text() +
            '<br>Lượt xem: ' + doc.select(".book_info .list-info .row:nth-last-child(1) .col-xs-9").text(),
            ongoing: doc.select(".book_info div.txt").html().indexOf("Đang Cập Nhật") >= 0,
            genres: genres
        });
    }

    return null;
}