load('src.js');

function execute() {
    return Response.success([
        {title: "Cập Nhật", input: BASE_URL + "/the-loai/moi-cap-nhap", script: "gen.js"},
        {title: "Hot", input: BASE_URL + "/the-loai/dang-hot", script: "gen.js"},
        {title: "Manga", input: BASE_URL + "/the-loai/manga", script: "gen.js"},
        {title: "Webtoon", input: BASE_URL + "/the-loai/webtoon", script: "gen.js"}
    ]);
}