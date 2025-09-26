load('config.js');
function execute(url) {
    url = url.replace(/^(?:https?:\/\/)?(?:[^@\n]+@)?(?:www\.)?([^:\/\n?]+)/img, BASE_URL);
    let response = fetch(url);
    if (response.ok) {
        let doc = response.html();
        let genres = [];
        doc.select("li.category > .detail-info a").forEach(e => {
            genres.push({
                title: e.text(),
                input: e.attr('href'),
                script: "gen.js"
            });
        });

        const infoBook = [
            `Tên khác: ${doc.select('.info-detail-comic .name-other > .detail-info').text()}`,
            `Tác giả: ${doc.select('.info-detail-comic .author > .detail-info').text()}`,
            `Tình trạng: ${doc.select('.info-detail-comic .status > .detail-info').text()}`,
            `Nhóm dịch: ${doc.select('.info-detail-comic .translate-group > .detail-info').text()}`,
            `Lượt xem: ${doc.select('.info-detail-comic .view-total > .detail-info').text()}`,
            `Lượt thích: ${doc.select('.info-detail-comic .view-like > .detail-info').text()}`,
            `Theo dõi: ${doc.select('.info-detail-comic .total-follow > .detail-info').text()}`,
            doc.select(".time-update").first().text().slice(2,-2),
        ]

        return Response.success({
            name: doc.select("h1.title-manga").first().text(),
            cover: doc.select(".image-info img.image-comic").first().attr("src"),
            author: doc.select("li.author > .detail-info").first().text(),
            description: doc.select(".detail-summary").html(),
            detail: infoBook.join("<br>"),
            host: BASE_URL,
            ongoing: doc.select("li.status > .detail-info").text().indexOf("Đang cập nhật") != -1,
            genres: genres,
        });
    }
    return null;
}