load('config.js');

function execute() {
    let response = fetch(BASE_URL + "/danh-sach-truyen");
    if (response.ok) {
        let doc = response.html();
        let genres = [];
        doc.select(".genres.box ul.nav li a").forEach(e => {
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