function execute(){
    return Response.success([
        { title: "Lasted Update", input: "https://otakusan.net/Manga/MangaNewest", script: "gen.js" }, 
        { title: "Top Day", input: "https://otakusan.net", script: "topday.js" },
        { title: "New Post", input: "https://otakusan.net/Manga/NewTitleNewest", script: "newpost.js" },
        { title: "Completed", input: "https://otakusan.net/Manga/CompletedNewest", script: "gen.js" },
        { title: "Ecchi Land", input: "https://otakusan.net/Manga/EcchiNewest", script: "ecchiland.js" },
        { title: "For Boy", input: "https://otakusan.net/Manga/ForBoyNewest", script: "gen.js" }, 
        { title: "For Girl", input: "https://otakusan.net/Manga/ForGirlNewest", script: "gen.js" },  
    ]);
}