load('config.js');

function execute(url) {
    const doc = Http.get(url).html()

    let genres = [];
    doc.select(".post-tags a").forEach(e => {
        genres.push({
            title: e.text(),
            input: e.attr('href'),
            script: "gen.js"
        });
    });

    return Response.success({
        name: doc.select("h1.single-post-title.entry-title").first().text(),
        cover: doc.select(".wp-block-gallery .wp-block-image img").first().attr("src"),
        author: "Đang cập nhật",
        description: doc.select("h1.single-post-title.entry-title").first().text(),
        detail: doc.select("h1.single-post-title.entry-title").first().text(),
        host: BASE_URL,
        ongoing: true,
        genres: genres,
        suggests: [
            {
                title: "You Might Also Like",
                input: doc.select("#related-posts > .oceanwp-row").html(),
                script: "suggest.js"
            }
        ]
    });
}