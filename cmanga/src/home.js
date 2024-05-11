load('config.js');
function execute() {
    return Response.success([
        { title: "Mới cập nhật", input: API + "/home_album_list?sort=update", script: "gen.js" },
        { title: "Truyện Hot", input: API + "/home_album_list?sort=update&hot=on", script: "gen.js" },
        { title: "Top view", input: API + "/home_album_list?sort=view", script: "gen.js" },
        { title: "Top theo dõi", input: API + "/home_album_list?sort=follow", script: "gen.js" }
    ]);
}