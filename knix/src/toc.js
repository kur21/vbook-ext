load('config.js');

function execute(url) {
    var doc = Http.get(url).html();
    var quantityChap = doc.select(".pagination > li:nth-last-child(2) > a").text()
    Console.log(+quantityChap)
    const data = [];

    for (var i = 0; i <= +quantityChap - 1 ; i++) {
        data.push({
            name: `Page ${i + 1}`,
            url: i == 0 ? url : url + `?page=${i + 1}`,
            host: BASE_URL
        })
    }

    return Response.success(data);
}