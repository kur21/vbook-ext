load('config.js');

function execute(url) {
    url = url.replace(/^(?:https?:\/\/)?(?:[^@\n]+@)?(?:www\.)?([^:\/\n?]+)/img, BASE_URL);
    var response = fetch(url, {
        method : "GET",
        headers : {
            Referer: BASE_URL,
            'user-agent': USER_AGENT,
        }
    })
    if(response.ok){
        let doc = response.html();
        let genres = [];
        doc.select(".v-item-group .group-content a").forEach(e => {
            genres.push({
                title: e.text(),
                input: e.attr('href').match(/=(.+)/)[1],
                script: "source.js"
            });
        });
        let cover = doc.select(".v-image img").first().attr('src')
        return Response.success({
            name: doc.select(".v-card-title").first().text(),
            cover: cover.includes('http') ? cover : BASE_URL + cover,
            author: doc.select(".information-section .row:nth-child(2) span").text() || 'Unknown',
            description: doc.select(".v-card-text").text(),
            detail: 'Tên khác: ' + doc.select(".information-section .row:nth-child(1) span").text() +
            '<br>Tác giả: ' + doc.select(".information-section .row:nth-child(2) span").text() +
            '<br>Trạng thái: ' + doc.select(".information-section .row:nth-child(3) span").text(),
            ongoing: doc.select(".information-section .row:nth-child(3) span").text().indexOf("Đang") != -1,
            host: BASE_URL,
            genres: genres,
        });
    }
    return null;
}