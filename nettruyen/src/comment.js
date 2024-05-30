load('config.js');

function execute(input, next) {
    if (!next) next = "1";
    let response = fetch(input + "&page=" + next);
    if (response.ok) {
        let data = response.json();
        let doc = Html.parse(data.html);
        let comments = [];
        doc.select(".summary").forEach(e => {
            comments.push({
                name: e.select(".authorname").text(),
                content: e.select(".comment-content").text(),
                description: e.select(".comment-footer abbr").first().text()
            });
        });

        let nextPage = Number(next) < data.total_page ? (Number(next) + 1).toString() : '';

        return Response.success(comments, nextPage);
    }

    return null;
}