load('config.js');
function execute() {
    return Response.success([
        { title: "Mới cập nhật", input: API + "/home_album_list?sort=update", script: "gen.js" },
        { title: "Xu hướng", input: API + "/home_album_list?sort=update&type=trending", script: "gen.js" },
        { title: "Truyện Mới", input: API + "/home_album_list?sort=update&type=new", script: "gen.js" },
        { title: "Truyện Vip", input: API + "/home_album_list?sort=update&type=vip", script: "gen.js" },
        { title: "Truyện 18+", input: API + "/home_album_list?sort=update&type=adult", script: "gen.js" },
    ]);
}