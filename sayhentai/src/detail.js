load('src.js');

function execute(url) {
    let response = fetch(url);

    if (response.ok) {
        let doc = response.html();

        let genres = [];
        doc.select(".post-content .post-content_item:last-child .genres-content a").forEach(e => {
            genres.push({
                title: e.text(),
                input: e.attr('href'),
                script: "gen.js"
            });
        });

        return Response.success({
            name: doc.select(".post-title h1").first().text(),
            cover: doc.select(".summary_image img").first().attr("src"),
            author: doc.select(".post-content .post-content_item:nth-child(5) .summary-content").text(),
            description: doc.select(".description-summary .summary__content").text(),
            detail: doc.select(".post-title h1").first().text() + 
            '<br>Rating: ' + doc.select(".post-content .post-rating .danhgia").text() + 
            '<br>Tên khác: ' + doc.select(".post-content .post-content_item:nth-child(4) .summary-content").text() + 
            '<br>Tác giả: ' + doc.select(".post-content .post-content_item:nth-child(5) .summary-content").text() + 
            '<br>View: ' + doc.select(".post-content .post-content_item:nth-child(6) .summary-content").text() +
            '<br>Trạng thái: ' + doc.select(".post-content .post-content_item:nth-child(7) .summary-content").text(),
            host: BASE_URL,
            genres: genres,
            ongoing: doc.select(".post-content .post-content_item:nth-child(7) .summary-content").text().includes("Đang Ra")
        });
    }

    return null;
}