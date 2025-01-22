load('config.js');

function execute(url) {
    url = url.replace(/^(?:https?:\/\/)?(?:[^@\n]+@)?(?:www\.)?([^:\/\n?]+)/img, BASE_URL);
    let response = fetch(url);
    if (response.ok) {
        let doc = response.html();

        let el = doc.select('.list-chapter nav ul li:not([style])')
        const data = [];
        for (let i = el.size() - 1; i >= 0; i--) {
            let e = el.get(i);
            data.push({
                name: e.select('a.chapter').text(),
                url: e.select('a.chapter').attr("href"),
                host: BASE_URL
            });
        }

        return Response.success(data);
    }

    return null;
}