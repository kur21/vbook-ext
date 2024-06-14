load('config.js');
function execute(key, page) {
    if (!page) page = '1';
    
    let response = fetch(BASE_URL + "/page/" + page + "?s=" + key + "&post_type=wp-manga");
    if (response.ok) {
        let doc = response.html();
        let comiclist = [];
        let next = /page\/(\d+)/.exec(doc.select(".nextpostslink").attr('href'));
        if (next) next = next[1];
        doc.select(".c-tabs-item__content").forEach(e => {
            comiclist.push({
                name: e.select("h3 a").text(),
                link: e.select("h3 a").attr("href"),
                cover: e.select("img.img-responsive").attr("data-lazy-src") || e.select("img.img-responsive").attr("data-src"),
                description: e.select('.chapter').first().text(),
                host: BASE_URL
            });
        });
        return Response.success(comiclist, next);
    }
    return null;
}