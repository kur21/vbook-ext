load('src.js');

function execute(url) {
    url = url.replace(/^(?:https?:\/\/)?(?:[^@\n]+@)?(?:www\.)?([^:\/\n?]+)/img, BASE_URL);
    let response = fetch(url);
    if(response.ok){
        let doc = response.html();
        return Response.success({
            name: doc.select(".v-card-title").first().text(),
            cover: doc.select(".v-image img").first().attr('src'),
            author: doc.select(".information-section .row:nth-child(2) span").text() || 'Unknown',
            description: doc.select(".v-card-text").text(),
            detail: 'Tên khác: ' + doc.select(".information-section .row:nth-child(1) span").text() +
            '<br>Tác giả: ' + doc.select(".information-section .row:nth-child(2) span").text() +
            '<br>Trạng thái: ' + doc.select(".information-section .row:nth-child(3) span").text(),
            ongoing: doc.select(".information-section .row:nth-child(3) span").text().indexOf("Đang") != -1,
            host: BASE_URL,
        });
    }
    return null;
}