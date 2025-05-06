load('config.js');
function execute(url) {
    url = url.replace(/^(?:https?:\/\/)?(?:[^@\n]+@)?(?:www\.)?([^:\/\n?]+)/img, BASE_URL);
    let response = fetch(url);
    if (response.ok) {
        let doc = response.html();
        let genres = [];
        doc.select(".book_other .kind span").forEach(e => {
            genres.push({
                title: e.text(),
                input: API + '/home_album_list?sort=update&tag=' + e.text(),
                script: "gen.js"
            });
        });

        return Response.success({
            name: doc.select(".book_other h1 p").first().text(),
            cover: BASE_URL + doc.select(".book_info .book_avatar img").first().attr("src"),
            author: 'Unknown',
            description: doc.select("#book_detail").text(),
            detail: doc.select(".book_other h1 p").first().text() +
            '<br>Lượt xem: ' + doc.select(".book_info_detail tbody tr span.total_view").text() +
            '<br>Lượt theo dõi: ' + doc.select(".book_info_detail tbody tr span.bookmark").text(),
            host: BASE_URL,
            ongoing: true,
            genres: genres
        });
    }
    return null;
}