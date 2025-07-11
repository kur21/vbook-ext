load('config.js');

function execute(key, page) {
    if (!page) page = '1';
    var url = `${BASE_URL}/search/${page}/?keyword=${key}`;
    var response = fetch(url);

    if(response.ok) {
        var doc = response.html()
        var novelList = [];
        var next = doc.select(".pagination").select("li.active + li").last().text();

        doc.select(".ModuleContent > .items .item.item-follow > figure").forEach(e => {
            const link = e.select("h3 > a").attr("href")
            novelList.push({
                cover: e.select(".image img").attr("src"),
                name: e.select("h3 > a").text(),
                link: link.includes('http') ? link : BASE_URL + link,
                description: `${e.select(".chapter a").first().text()} - ${e.select(".chapter .time").first().text()}`,
                host: BASE_URL,
            });
        })

        return Response.success(novelList, next)
    }

    return null;
}
