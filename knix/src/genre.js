load('config.js');

function execute() {
    return Response.success([{
        title: "Sexy",
        input: BASE_URL + "/vi/type/1",
        script: "gen.js"
    }, {
        title: "Pure",
        input: BASE_URL + "/vi/type/2",
        script: "gen.js"
    }, {
        title: "Stocking",
        input: BASE_URL + "/vi/type/3",
        script: "gen.js"
    }, {
        title: "Legs",
        input: BASE_URL + "/vi/type/4",
        script: "gen.js"
    }, {
        title: "Breast",
        input: BASE_URL + "/vi/type/5",
        script: "gen.js"
    }, {
        title: "Cosplay",
        input: BASE_URL + "/vi/type/6",
        script: "gen.js"
    }, {
        title: "Uniform",
        input: BASE_URL + "/vi/type/7",
        script: "gen.js"
    }, {
        title: "Internet",
        input: BASE_URL + "/vi/type/8",
        script: "gen.js"
    }, {
        title: "Large Scale",
        input: BASE_URL + "/vi/type/9",
        script: "gen.js"
    }, {
        title: "AI",
        input: BASE_URL + "/vi/type/10",
        script: "gen.js"
    }, {
        title: "News",
        input: BASE_URL + "/vi/bits-of-news/",
        script: "gen.js"
    }]);
}