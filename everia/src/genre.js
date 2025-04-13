load('config.js');

function execute() {
    return Response.success([{
        title: "Tất cả thể loại",
        input: BASE_URL,
        script: "gen.js"
    }, {
        title: "Gravure",
        input: BASE_URL + "/category/gravure",
        script: "gen.js"
    }, {
        title: "Japan",
        input: BASE_URL + "/category/japan",
        script: "gen.js"
    }, {
        title: "Korea",
        input: BASE_URL + "/category/korea",
        script: "gen.js"
    }, {
        title: "Chinese",
        input: BASE_URL + "/category/chinese",
        script: "gen.js"
    }, {
        title: "Thailand",
        input: BASE_URL + "/category/thailand",
        script: "gen.js"
    }, {
        title: "Cosplay",
        input: BASE_URL + "/category/cosplay",
        script: "gen.js"
    }]);
}