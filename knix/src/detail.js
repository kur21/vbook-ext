load('config.js');

function execute(url) {
    const doc = Http.get(url).html()

    let genres = [];
    doc.select(".article-tags a").forEach(e => {
        genres.push({
            title: e.text(),
            input: BASE_URL + e.attr('href'),
            script: "gen.js"
        });
    });

    return Response.success({
        name: doc.select("h1.focusbox-title").first().text(),
        cover: BASE_URL + doc.select("section#main article.article-content .item-image img").first().attr("data-src"),
        author: "Đang cập nhật",
        description: doc.select("h1.focusbox-title").first().text(),
        detail: doc.select("h1.focusbox-title").first().text(),
        host: BASE_URL,
        ongoing: false,
        genres: genres,
        suggests: [
            {
                title: "You Might Also Like",
                input: doc.select(".excerpts-article .excerpts").html(),
                script: "suggest.js"
            }
        ]
    });
}