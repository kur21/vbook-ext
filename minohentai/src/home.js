function execute() {
    return Response.success([
        {title: "Mới Cập Nhật", input: "/hentai/search-advanced", script: "gen.js"},
        {title: "Truyện Mới", input: "/hentai/truyen-moi", script: "gen.js"},
        {title: "Truyện Nổi Bật", input: "/hentai/hot", script: "gen.js"},
        {title: "Top Theo Dõi", input: "/hentai/top-theo-doi", script: "gen.js"}
    ]);
}
