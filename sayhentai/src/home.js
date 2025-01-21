load('config.js');

function execute() {
    return Response.success([
        {title: "Mới cập nhật", input: BASE_URL, script: "cat.js"},
        {title: "Manhwa", input: BASE_URL + "/genre/manhwa", script: "gen.js"},
        {title: "Manga", input: BASE_URL + "/genre/manga", script: "gen.js"},
        {title: "Hoàn thành", input: BASE_URL + "/completed", script: "gen.js"}
    ]);
}