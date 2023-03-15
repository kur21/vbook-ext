load('src.js');

function execute(url) {
    let response = fetch(url);

    if (response.ok) {
        let doc = response.html();

        let el = doc.select(".list-chapter .list-item > li").select("a");
        const data = [];
        for (let i = el.size() - 1; i >= 0; i--) {
            let e = el.get(i);
            data.push({
                name: e.text(),
                url: e.attr("href"),
                host: BASE_URL
            })
        }

        return Response.success(data);
    }
    return null;
}