function execute(url) {
    const doc = Http.get(url).html()
    return Response.success({
        name: doc.select("h1.single-post-title.entry-title").first().text(),
        cover: doc.select(".wp-block-gallery .wp-block-image img").first().attr("data-src"),
        author: "Đang cập nhật",
        description: doc.select("h1.single-post-title.entry-title").first().text(),
        detail: doc.select("h1.single-post-title.entry-title").first().text(),
        host: "https://everia.club",
        ongoing: true
    });
}