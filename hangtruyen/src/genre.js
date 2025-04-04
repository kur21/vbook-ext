load('config.js');

function execute() {
    let response = fetch(BASE_URL);
    if (response.ok) {
        let doc = response.html();
        let genre = [];
        doc.select(".menu-tag .dropdown-menu span > a.dropdown-item").forEach(e => genre.push({
            title: e.text(),
            input: e.attr("href").replace(/^https?:\/\/[^\/]+/, ''),
            script: "gen.js"
        }));
        return Response.success(genre);
    }
    return null;
}