function execute() {
    return Response.success([
        {title: "Mới Cập Nhật", input: "/tim-kiem-nang-cao.html?sort=2", script: "gen.js"},
        {title: "Top Ngày", input: "/top-ngay.html", script: "gen.js"},
        {title: "Top Tuần", input: "/top-tuan.html", script: "gen.js"},
        {title: "Top Tháng", input: "/top-thang.html", script: "gen.js"},
        {title: "Yêu Thích", input: "/truyen-yeu-thich.html", script: "gen.js"},
        {title: "Truyện Mới", input: "/truyen-tranh-moi.html", script: "gen.js"},
        {title: "Truyện Full", input: "/truyen-hoan-thanh.html", script: "gen.js"}
    ]);
}
