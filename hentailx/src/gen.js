load('src.js');
function execute(url, page) {
    if (!page) page = 1;
    let response = fetch(BASE_URL+'/danh-sach',{
        method: "GET",
        queries: {
            sort : url,
            page : page
        }
    })
    if(response.ok){
        let doc = response.html();
        //let next = doc.select("ul.gap-2").select("li.bg-white").text();
        let el = doc.select(".manga-vertical")
        let data = [];
        el.forEach(e => data.push({
            name: e.select("a.text-ellipsis").text(),
            link: BASE_URL + e.select("a.text-ellipsis").attr("href"),
            cover: e.select(".cover").first().attr("style").split("'")[1],
            description: e.select("a.text-white").first().text(),
            host: BASE_URL
        }))
        return Response.success(data,(++page).toString())
    }
    return null;
}