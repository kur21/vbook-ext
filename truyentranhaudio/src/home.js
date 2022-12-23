function execute() {
    return Response.success([
        {title: "Truyện mới cập nhật", input: "https://truyentranhaudio.online/", script: "gen.js"},
        {title: "Truyện full", input: "https://truyentranhaudio.online/tim-truyen/&status=1", script: "gen.js"},
        {title: "Truyện mới", input: "https://truyentranhaudio.online/tim-truyen/&sort=15", script: "gen.js"},
        {title: "Top all", input: "https://truyentranhaudio.online/tim-truyen/&sort=10", script: "gen.js"},
        {title: "Top tháng", input: "https://truyentranhaudio.online/tim-truyen/&sort=11", script: "gen.js"},
        {title: "Top tuần", input: "https://truyentranhaudio.online/tim-truyen/&sort=12", script: "gen.js"},
        {title: "Top ngày", input: "https://truyentranhaudio.online/tim-truyen/&sort=13", script: "gen.js"},
        {title: "Theo dõi", input: "https://truyentranhaudio.online/tim-truyen/&sort=20", script: "gen.js"},
        {title: "Bình luận", input: "https://truyentranhaudio.online/tim-truyen/&sort=25", script: "gen.js"}
    ]);
}