function execute(url, page) {
    if (!page) page = '1';
    const doc = Http.get(url).params({"page": page}).html()

    var next = doc.select(".pagination").select("li.active + li").text()

    const el = doc.select(".ModuleContent .items .item");

    const data = [];
    for (var i = 0; i < el.size(); i++) {
        var e = el.get(i);
        var coverImg = e.select(".image img").first().attr("data-original")
        if (coverImg.startsWith("//")) {
            coverImg = "https:" + coverImg
        }
        var link = e.select(".box_tootip .box_li .box_img a").attr("href")
        if (link.startsWith("/")) {
            link = "https://truyentranhaudio.online" + link;
        }
        data.push({
            name: e.select(".box_tootip .box_li .title").text(),
            link: link,
            cover: coverImg,
            description: e.select(".box_tootip .box_li .box_text").text(),
            host: "https://truyentranhaudio.online"
        })
    }

    return Response.success(data, next)
}