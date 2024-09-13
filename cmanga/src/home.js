load('config.js');
function execute() {
    return Response.success([
        { title: "Mới cập nhật", input: API + "/home_album_list?sort=update", script: "gen.js" },
        { title: "Hot", input: API + "/home_album_list?sort=update&type=hot", script: "gen.js" },
        { title: "Mới", input: API + "/home_album_list?sort=update&type=new", script: "gen.js" },
        { title: "Vip", input: API + "/home_album_list?sort=update&type=vip", script: "gen.js" },
        { title: "Xu hướng", input: API + "/home_album_list?sort=update&type=trending", script: "gen.js" },
        { title: "18+", input: API + "/home_album_list?sort=update&type=adult", script: "gen.js" },
    ]);
}