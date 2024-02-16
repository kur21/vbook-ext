function execute() {
    return Response.success([
        {title: "Mới nhất", input: "https://xx.knit.bid/vi/sort/new", script: "gen.js"},
        {title: "Phổ biến", input: "https://xx.knit.bid/vi/sort/hot", script: "gen.js"},
        {title: "Ngẫu nhiên", input: "https://xx.knit.bid/vi", script: "gen.js"},
    ]);
}