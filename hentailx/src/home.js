function execute() {
    return Response.success([
        {title: "Cập Nhật", input: "-updated_at", script: "gen.js"},
        {title: "Mới Nhất", input: "-created_at", script: "gen.js"},
        {title: "Xem Nhiều", input: "-views", script: "gen.js"},
    ]);
}