load('config.js');

function execute(url) {
    var doc = Http.get(url).html();
    const data = [
        {
            name: doc.select("h1.single-post-title.entry-title").first().text(),
            url: url,
            host: BASE_URL
        }
    ];

    return Response.success(data);
}