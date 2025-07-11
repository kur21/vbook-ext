load('config.js');

function execute() {
    let response = fetch(BASE_URL);
    if (response.ok) {
        let doc = response.html();
        let genre = [];
        doc.select(".navbar-nav-genres .nav li a").forEach(e => genre.push({
            title: e.text(),
            input: e.attr("href").replace(/^https?:\/\/[^\/]+/, ''),
            script: "gen.js"
        }));
        return Response.success(genre);
    }
    return null;
}