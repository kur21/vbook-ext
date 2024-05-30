load('config.js');

function execute(url) {
    url = url.replace(/^(?:https?:\/\/)?(?:[^@\n]+@)?(?:www\.)?([^:\/\n?]+)/img, BASE_URL);

    let response = fetch(url);
    if (response.ok) {
        let doc = response.html();
        let coverImg = doc.select(".detail-info img").first().attr("src");
        if (coverImg.startsWith("//")) {
            coverImg = "https:" + coverImg;
        }
        let genres = [];
        doc.select(".kind a").forEach(e => {
            genres.push({
                title: e.text(),
                input: e.attr("href"),
                script: "gen.js"
            });
        });

        let comicId = /MANGA_ID = (.*?);/.exec(doc)[1];

        let detail = doc.select("#item-detail .small").first().text();
        let view = doc.select(".list-info p").last().text();
        if (view) {
            detail += "<br>Lượt xem: " + view
        }
        return Response.success({
            name: doc.select("h1.title-detail").first().text(),
            cover: coverImg,
            author: doc.select(".author a").first().text() || 'Đang cập nhật' ,
            description: doc.select(".detail-content p").html(),
            detail: detail,
            ongoing: doc.select(".detail-info .status").html().indexOf("Đang tiến hành") >= 0,
            genres: genres,
            comment: {
                input: BASE_URL + `/ajax/comment/widget/${comicId}?manga_id=${comicId}&chapter_id=&sort=newest`,
                script: "comment.js"
            },
            host: BASE_URL
        });
    }

    return null;
}