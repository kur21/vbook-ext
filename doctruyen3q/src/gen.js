load('config.js');
function execute(url, page) {
    if (!page) page = '1';
    if(!url.includes('sort=') || !url.includes('status=')) {
        url += '?sort=1&status=2'
    }
    let response = fetch(`${url}&page=${page}`);
    if (response.ok) {
        let doc = response.html();
        let comiclist = [];
        let next = doc.select(".pagination .page-item.active + .page-item a.page-link").first().text();
        
        doc.select(".main-left .item-manga").forEach(e => {
            comiclist.push({
                name: e.select("h3 a.title-manga").text(),
                link: e.select("h3 a").attr("href"),
                cover: e.select(".image-item img").attr("data-original") || e.select(".image-item img").attr("src"),
                description: e.select('li.chapter-detail a').first().text() + ' - ' + e.select('li.chapter-detail i').first().text(),
                host: BASE_URL
            });
        });
        return Response.success(comiclist, next);
    }
    return null;
}