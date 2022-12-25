load('src.js');
function execute(url) {
    let browser = Engine.newBrowser();
    browser.launch(url, 10000) ;
    let doc = browser.html();
    browser.close();
    return Response.success({
        name: doc.select("h1").text(),
        cover: doc.select(".book_avatar img").first().attr("src"),
        author: doc.select(".profile a").text() || '^^!',
        description: doc.select("#book_detail").first().text() || doc.select("#book_more").first().text(),
        detail : doc.select(".status").first().text() + ('<br>Nhóm dịch: '+(doc.select(".profile a").text()||'^^!')) + ('<br>Cập nhật: '+doc.select(".last_update").text()),
        ongoing: doc.select(".status").first().text().indexOf("Đang") != -1,
        host: src
    });
}
