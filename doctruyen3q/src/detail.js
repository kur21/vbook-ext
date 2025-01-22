load('config.js');
function execute(url) {
    url = url.replace(/^(?:https?:\/\/)?(?:[^@\n]+@)?(?:www\.)?([^:\/\n?]+)/img, BASE_URL);
    let response = fetch(url);
    if (response.ok) {
        let doc = response.html();
        let genres = [];
        doc.select("li.category > .detail-info a").forEach(e => {
            genres.push({
                title: e.text(),
                input: e.attr('href'),
                script: "gen.js"
            });
        });
        return Response.success({
            name: doc.select("h1.title-manga").first().text(),
            cover: doc.select(".image-info img.image-comic").first().attr("src"),
            author: doc.select("li.author > .detail-info").first().text(),
            description: doc.select(".detail-summary").html(),
            detail: doc.select(".cr-rank > a").text()+'<br>'+doc.select(".cr-rank > span").text()+'<br>'+doc.select(".time-update").first().text(),
            host: BASE_URL,
            ongoing: doc.select("li.status > .detail-info").text().indexOf("Đang cập nhật") != -1,
            genres: genres,
        });
    }
    return null;
}