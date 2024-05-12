load('config.js');
function execute(url) {
    let response = fetch(url);
    if (response.ok) {
        let doc = response.html();
        Console.log(doc)
        let genres = [];
        doc.select(".book_other .kind a").forEach(e => {
            genres.push({
                title: e.text(),
                input: API + '/home_album_list?sort=update&tag=' + e.attr('href').replace('/category/', ''),
                script: "gen.js"
            });
        });

        return Response.success({
            name: doc.select(".book_other h1 p").first().text(),
            cover: BASE_URL + doc.select(".book_info .book_avatar img").first().attr("src"),
            author: 'Unknown',
            description: doc.select("#book_detail p").text(),
            detail: doc.select(".book_other h1 p").first().text() +
            '<br>Lượt xem: ' + doc.select(".book_info_detail tbody tr:nth-child(3) td:last-child span").text() +
            '<br>Lượt theo dõi: ' + doc.select(".book_info_detail tbody tr:nth-child(4) td:last-child span").text(),
            host: BASE_URL,
            ongoing: true,
            genres: genres
        });
    }
    return null;
}