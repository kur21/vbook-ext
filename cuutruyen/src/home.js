function execute() {
    return Response.success([
        {title: "Mới cập nhật", input: "https://cuutruyen.net/api/v2/mangas/recently_updated", script: "gen.js"},
        {title: "Nổi bật", input: "https://cuutruyen.net/api/v2/mangas/top?duration=all", script: "gen.js"},
        {title: "Nổi bật tuần", input: "https://cuutruyen.net/api/v2/mangas/top?duration=week", script: "gen.js"},
        {title: "Nổi bật tháng", input: "https://cuutruyen.net/api/v2/mangas/top?duration=month", script: "gen.js"},
    ]);
}