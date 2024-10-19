load('src.js');
function execute(key, page) {
    if (!page) page = 1;
    url = BASE_URL+'/tim-kiem?sort=-updated_at&filter%5Bname%5D='+key+'&filter%5Bstatus%5D=2%2C1&page='+page
    let response = fetch(url)
    if(response.ok){
        let doc = response.html();
        let el = doc.select(".grid .w-full.relative > .manga-vertical")
        let data = [];
        el.forEach(e => data.push({
            name: e.select(".p-2 > a ").text(),
            link: BASE_URL + e.select(".p-2 > a").attr("href"),
            cover: e.select(".cover").first().attr("data-bg"),
            description: e.select("a.text-white").first().text(),
            host: BASE_URL
        }))
        return Response.success(data, (++page).toString())
    }
    return null;
}