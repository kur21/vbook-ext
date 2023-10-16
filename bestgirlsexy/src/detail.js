function execute(url) {
    const doc = Http.get(url).html()
    return Response.success({
        name: doc.select(".elementor-widget-container h1.elementor-heading-title.elementor-size-large").first().text(),
        cover: doc.select(".elementor-widget-container > p > img").first().attr("src"),
        author: "Đang cập nhật",
        description: doc.select(".elementor-widget-container p:nth-child(4)").first().text(),
        detail: doc.select(".elementor-widget-container p:nth-child(4)").first().text(),
        host: "https://bestgirlsexy.com",
        ongoing: false
    });
}