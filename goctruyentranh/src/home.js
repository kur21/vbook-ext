function execute() {
    return Response.success([
        {title: "Cập Nhật", input: "&orders%5B%5D=recentDate", script: "gen.js"},
        {title: "Xem Nhiều", input: "&orders%5B%5D=viewCount", script: "gen.js"},
        {title: "Hoàn Thành", input: "&orders%5B%5D=updatedAt&status%5B%5D=END", script: "gen.js"},
    ]);
}