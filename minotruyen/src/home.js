load('config.js')
function execute() {
    return Response.success([
        {title: "Mới Cập Nhật", input: `/${TYPE}/search-advanced`, script: "gen.js"},
        {title: "Truyện Mới", input: `/${TYPE}/truyen-moi`, script: "gen.js"},
        {title: "Truyện Nổi Bật", input: `/${TYPE}/hot`, script: "gen.js"},
        {title: "Top Theo Dõi", input: `/${TYPE}/top-theo-doi`, script: "gen.js"}
    ]);
}
