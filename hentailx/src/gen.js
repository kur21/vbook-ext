load('config.js');
function execute(url, page) {
    let status = 'ongoing,completed,paused'

    if (!page) page = 1;

    if (url.includes('|')) {
        status = url.split('|')[1]
        url = url.split('|')[0]
    }

    let response = fetch(BASE_URL+'/tim-kiem',{
        method: "GET",
        headers: {
            Referer: BASE_URL,
        },
        queries: {
            sort : url,
            page : page,
            'filter[status]' : status
        }
    })

    if(response.ok){
        let doc = response.html();
        let el = doc.select(".manga-vertical")
        let data = [];
        el.forEach(e => data.push({
            name: e.select("a.text-ellipsis").text(),
            link: BASE_URL + e.select("a.text-ellipsis").attr("href"),
            cover: e.select(".cover").first().attr("data-bg"),
            description:  e.select("a.text-white").first().text(),
            host: BASE_URL
        }))
        return Response.success(data,(++page).toString())
    }
    return null;
}