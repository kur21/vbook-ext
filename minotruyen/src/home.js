function execute() {
    return Response.success([
        {title: "Mới Cập Nhật", input: "/comics/search-advanced", script: "gen.js"},
        {title: "Truyện Mới", input: "/comics/truyen-moi", script: "gen.js"},
        {title: "Truyện Nổi Bật", input: "/comics/hot", script: "gen.js"},
        {title: "Top Theo Dõi", input: "/comics/top-theo-doi", script: "gen.js"}
    ]);
}
