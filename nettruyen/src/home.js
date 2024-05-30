load('config.js');
function execute() {
    return Response.success([
        {title: "Mới cập nhật", input: BASE_URL + "/danh-sach-truyen", script: "gen.js"},
        {title: "Truyện mới", input: BASE_URL + "/danh-sach-truyen/?sort=release-date", script: "gen.js"},
        {title: "Top all", input: BASE_URL + "/danh-sach-truyen/?sort=views", script: "gen.js"},
        {title: "Top tháng", input: BASE_URL + "/danh-sach-truyen/?sort=views_month", script: "gen.js"},
        {title: "Top tuần", input: BASE_URL + "/danh-sach-truyen/?sort=views_week", script: "gen.js"},
        {title: "Top ngày", input: BASE_URL + "/danh-sach-truyen/?sort=views_day", script: "gen.js"},
        {title: "Theo dõi", input: BASE_URL + "/danh-sach-truyen/?sort=bookmarks", script: "gen.js"},
        {title: "Hoàn thành", input: BASE_URL + "/truyen-hoan-thanh", script: "gen.js"}
    ]);
}