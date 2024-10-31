function execute(url) {
    const doc = Http.get(url).html()

    let genres = [];
    doc.select(".elementor-post-info__item-prefix + .elementor-post-info__terms-list a").forEach(e => {
        genres.push({
            title: e.text(),
            input: e.attr('href'),
            script: "gen.js"
        });
    });

    return Response.success({
        name: doc.select(".elementor-widget-container h1.elementor-heading-title.elementor-size-large").first().text(),
        cover: doc.select(".elementor-widget-container > p > img").first().attr("src"),
        author: "Đang cập nhật",
        description: doc.select(".elementor-widget-container p:nth-child(5)").first().text(),
        detail: doc.select(".elementor-widget-container p:nth-child(4)").first().text(),
        host: "https://bestgirlsexy.com",
        ongoing: false,
        genres: genres,
        suggests: [
            {
                title: "Related post",
                input: doc.select(".elementor-portfolio.elementor-grid.elementor-posts-container").html(),
                script: "suggest.js"
            }
        ]
    });
}