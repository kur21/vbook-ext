load('config.js');
function execute(url) {
    url = url.replace(/^(?:https?:\/\/)?(?:[^@\n]+@)?(?:www\.)?([^:\/\n?]+)/img, BASE_URL);
    let response = fetch(url)
    if(response.ok) {
        let doc = response.html()
        
        let genres = [];
        doc.select(".justify-between > .flex > .grow > .mt-2 > span a").forEach(e => {
            genres.push({
                title: e.text(),
                input: BASE_URL + e.attr('href'),
                script: "cat.js"
            });
        });

        return Response.success({
            name: doc.select(".mb-4 span").first().text(),
            cover: doc.select(".cover").first().attr("style").split("'")[1],
            author: doc.select(".grow a[href~=tac-gia]").first().text(),
            description: doc.select(".pt-4 > p:not(:first-child)").text(),
            detail: 'Tác Giả: '+doc.select(".grow a[href~=tac-gia]").first().text() + 
            '<br>Tình trạng: '+doc.select(".grow a[href~=danh-sach] span").first().text() + 
            '<br>'+doc.select(".grow .mt-2").last().text(),
            ongoing: doc.select(".grow a[href~=danh-sach] span").first().text() == 'Đang tiến hành',
            genres: genres,
            host: BASE_URL,
            suggests: [
                {
                    title: "Truyện cùng tác giả",
                    input: doc.select(".gap-3.grid").html(),
                    script: "suggest.js"
                }
            ]
        });
    }
}