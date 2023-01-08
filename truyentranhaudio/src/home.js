load('src.js');

function execute() {
    return Response.success([
        {title: "Truyện mới cập nhật", input: src, script: "gen.js"},
        {title: "Truyện full", input: src + "/tim-truyen/&status=1", script: "gen.js"},
        {title: "Truyện mới", input: src + "/tim-truyen/&sort=15", script: "gen.js"},
        {title: "Top all", input: src + "/tim-truyen/&sort=10", script: "gen.js"},
        {title: "Top tháng", input: src + "/tim-truyen/&sort=11", script: "gen.js"},
        {title: "Top tuần", input: src + "/tim-truyen/&sort=12", script: "gen.js"},
        {title: "Top ngày", input: src + "/tim-truyen/&sort=13", script: "gen.js"},
        {title: "Theo dõi", input: src + "/tim-truyen/&sort=20", script: "gen.js"},
        {title: "Bình luận", input: src + "/tim-truyen/&sort=25", script: "gen.js"}
    ]);
}