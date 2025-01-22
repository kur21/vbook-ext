load('config.js');
function execute() {
    return Response.success([
        { title: "Latest", input: BASE_URL + '/tim-truyen', script: "gen.js" },
        { title: "Top all", input: BASE_URL + "/tim-truyen?status=2&sort=2", script: "gen.js" },
        { title: "NSFW", input: BASE_URL + "/tim-truyen/18", script: "gen.js" },
        { title: "Completed", input: BASE_URL + "/tim-truyen?status=1&sort=1", script: "gen.js" }
    ]);
}