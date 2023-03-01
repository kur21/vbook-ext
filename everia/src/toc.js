function execute(url) {
    var doc = Http.get(url).html();
    const data = [
        {
            name: doc.select("h1.title.entry-title").first().text(),
            url: url,
            host: "https://everia.club"
        }
    ];

    return Response.success(data);
}