
load('config.js');
function execute() {
    return Response.success([
        {title: "Mới nhất", input: BASE_URL + "/vi/sort/new", script: "gen.js"},
        {title: "Phổ biến", input: BASE_URL + "/vi/sort/hot", script: "gen.js"},
        {title: "Ngẫu nhiên", input: BASE_URL, script: "gen.js"},
    ]);
}