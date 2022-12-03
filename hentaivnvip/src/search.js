function execute(key, page) {
    let doc = fetch('https://hentaivnvip.net/truyen-hentai-moi/?q='+key).html()
    let el = doc.select(".comics-grid .entry")
    let data = [];
    el.forEach(e =>data.push({
            name: e.select("a.name").first().text(),
            link: e.select("a.name").first().attr("href"),
            cover: e.select("img").first().attr("src"),
            description: e.select(".date-time").first().text(),
            host: "https://hentaivnvip.net"
        })
    )
    return Response.success(data)
}