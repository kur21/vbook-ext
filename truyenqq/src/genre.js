load('bypass.js');

function execute() {
    let doc = bypass("https://truyenqqhot.com/index.html", fetch("https://truyenqqhot.com/index.html").html());
    if (doc) {
        let genres = [];

        doc.select(".book_tags_content").first().select("a").forEach(e => {
            genres.push({
                title: e.text(),
                input: e.attr("href"),
                script: "gen.js"
            })
        });
        return Response.success(genres);
    }

    return null;
}