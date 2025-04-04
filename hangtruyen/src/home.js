function execute() {
    return Response.success([
        {title: "Mới Cập Nhật", input: "/tim-kiem", script: "gen.js"},
        {title: "Thịnh hành", input: "/tim-kiem?orderBy=view_desc", script: "gen.js"},
        {title: "Hoàn Thành", input: "/da-hoan-thanh", script: "gen.js"}
    ]);
}
