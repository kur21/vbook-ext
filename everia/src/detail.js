function execute(url) {
    const doc = Http.get(url).html()
    return Response.success({
        name: doc.select("h1.title.entry-title").first().text(),
        cover: doc.select(".nv-content-wrap img").first().attr("data-src"),
        author: "Đang cập nhật",
        description: doc.select("h1.title.entry-title").first().text(),
        detail: doc.select("h1.title.entry-title").first().text(),
        host: "https://everia.club",
        ongoing: true
    });
}