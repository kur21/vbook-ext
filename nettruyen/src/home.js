function execute() {
    return Response.success([
        {title: "Mới Cập Nhật", input: "/danh-sach-truyen", script: "gen.js"},
        {title: "Top Ngày", input: "/danh-sach-truyen/{page}/?sort=views_day", script: "gen.js"},
        {title: "Top Tuần", input: "/danh-sach-truyen/{page}/?sort=views_week", script: "gen.js"},
        {title: "Top Tháng", input: "/danh-sach-truyen/{page}/?sort=views_month", script: "gen.js"},
        {title: "Yêu Thích", input: "/danh-sach-truyen/{page}/?sort=views", script: "gen.js"},
        {title: "Truyện Mới", input: "/danh-sach-truyen/{page}/?sort=release-date", script: "gen.js"},
        {title: "Hoàn Thành", input: "/truyen-hoan-thanh", script: "gen.js"}
    ]);
}
