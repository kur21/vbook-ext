load('config.js');

function execute(url) {
    var doc = Http.get(url).html();
    const data = [
        {
            name: doc.select(".elementor-widget-container h1.elementor-heading-title.elementor-size-large").first().text(),
            url: url,
            host: BASE_URL
        }
    ];

    return Response.success(data);
}