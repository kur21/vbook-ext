load('config.js');

function execute(url) {
    url = url.replace(/^(?:https?:\/\/)?(?:[^@\n]+@)?(?:www\.)?([^:\/\n?]+)/img, BASE_URL);
    let response = fetch(url);

    if (response.ok) {
        let doc = response.html();
        const content = doc.select(".main-info .left-info");

        let genres = []
        content.select(".m-tags > a").forEach(e => {
            genres.push({
                title: e.text(),
                input: e.attr('href'),
                script: "gen.js"
            });
        });

        return Response.success({
            name: content.select("h1.title").text(),
            cover: content.select(".col-image-wrapper .col-image img").attr("src"),
            host: BASE_URL,
            author: content.select(".info-group .author p").text() || 'Đang cập nhật',
            description: content.select(".sort-des .line-clamp").text(),
            detail: 'Tên truyện: ' + content.select("h1.title").text() +
            '<br>Tác giả: ' + (content.select(".info-group .author p").text() || 'Đang cập nhật') +
            '<br>Tình trạng: ' + content.select(".info-group .status p").text() +
            '<br>Cập nhật: ' + content.select(".info-group .update p").text() +
            '<br>Lượt xem: ' + content.select(".info-group .view p").text(),
            ongoing: content.select(".info-group .status p").text().indexOf("Đang tiến hành") >= 0,
            genres: genres,
            suggests: [
                {
                    title: "Truyện liên quan",
                    input: doc.select("#cm-related"),
                    script: "suggests.js"
                }
            ]
        });
    }

    return null;
}