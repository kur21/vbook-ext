load('config.js');

function execute(url) {
    url = url.replace(/^(?:https?:\/\/)?(?:[^@\n]+@)?(?:www\.)?([^:\/\n?]+)/img, BASE_URL);
    var response = fetch(url)

    if(response.ok) {
        var doc = response.html().select('#item-detail')
        
        var cover = doc.select(".detail-info .col-image > img").first().attr("src");
        if(!cover.includes('http')) {
            cover = BASE_URL + cover
        }

        let genres = []
        doc.select(".list-info .kind a").forEach(e => {
            genres.push({
                title: e.text(),
                input: e.attr('href').replace(/^https?:\/\/[^\/]+/, ''),
                script: "gen.js"
            });
        });
        
        return Response.success({
            name: doc.select("h1.title-detail").text(),
            cover: cover,
            host: BASE_URL,
            author: doc.select(".list-info .author > *:last-child").text(),
            description: doc.select(".detail-content > p").html(),
            detail: 'Tên khác: ' + doc.select(".othername h2").text() +
            '<br>Tác giả: ' + doc.select(".author > *:last-child").text() +
            '<br>Tình trạng: ' + doc.select(".status > *:last-child").text() +
            '<br>Lượt thích: ' + doc.select(".row .number-like").text() +
            '<br>Lượt theo dõi: ' + doc.select(".follow span b").text() +
            '<br>Lượt xem: ' + doc.select(".list-info .row:last-child > *:last-child").text(),
            ongoing: doc.select(".status > *:last-child").text().indexOf("Đang tiến hành") >= 0,
            genres: genres
        });

    }

    return null;
}