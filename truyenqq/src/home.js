function execute() {
    return Response.success([
        {title: "Top Ngày", input: "https://truyenqqhot.com/top-ngay.html", script: "gen.js"},
        {title: "Top Tuần", input: "https://truyenqqhot.com/top-tuan.html", script: "gen.js"},
        {title: "Top Tháng", input: "https://truyenqqhot.com/top-thang.html", script: "gen.js"},
        {title: "Yêu Thích", input: "https://truyenqqhot.com/truyen-yeu-thich.html", script: "gen.js"},
        {title: "Mới Cập Nhật", input: "https://truyenqqhot.com/truyen-moi-cap-nhat.html", script: "gen.js"},
        {title: "Truyện Mới", input: "https://truyenqqhot.com/truyen-tranh-moi.html", script: "gen.js"},
        {title: "Truyện Full", input: "https://truyenqqhot.com/truyen-hoan-thanh.html", script: "gen.js"}
    ]);
}
