load('config.js');
function execute(key, page) {
    if (!page) page = '1';
    let new_url = BASE_URL + `/tim-kiem?keyword=${key}&page=${page}`;
    let response = fetch(new_url);

    if(response.ok) {
        let doc = response.html();
        var novelList = [];
        var next = ++page;

        doc.select(".search-result .row .m-post").forEach(e => {
            const ct = e.select(".p-content");
            const name = ct.select(".m-name a").text();
            const link = BASE_URL + ct.select(".m-name a").attr("href");
            const description = `${ct.select(".list-chaps li:first-child a").attr("title")} - ${ct.select(".list-chaps li:first-child a span").text()}`
            const cover = e.select(".p-thumb img").attr("data-src") || e.select(".p-thumb img").attr("data-original");
            const host = BASE_URL;

            novelList.push({ name, link, description, cover, host });
        })

        return Response.success(novelList, next)
    }

    return null;
}
