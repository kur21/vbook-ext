function execute() {
    return Response.success([
        {title: "Mới cập nhật", input: "https://saytruyen.com", script: "cat.js"},
        {title: "Manhwa", input: "https://saytruyen.com/genre/manhwa", script: "gen.js"},
        {title: "Manga", input: "https://saytruyen.com/genre/manga", script: "gen.js"},
        {title: "Manhua", input: "https://saytruyen.com/genre/manhua", script: "gen.js"},
        {title: "Romance", input: "https://saytruyen.com/genre/romance", script: "gen.js"}
    ]);
}