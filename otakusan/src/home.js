function execute(){
    return Response.success([
        { title: "Lasted Update", input: "https://otakusan1.net/Manga/MangaNewest", script: "gen.js" }, 
        { title: "Top Day", input: "https://otakusan1.net", script: "topday.js" },
        { title: "New Post", input: "https://otakusan1.net/Manga/NewTitleNewest", script: "newpost.js" },
        { title: "Completed", input: "https://otakusan1.net/Manga/CompletedNewest", script: "gen.js" },
        { title: "Ecchi Land", input: "https://otakusan1.net/Manga/EcchiNewest", script: "ecchiland.js" },
        { title: "For Boy", input: "https://otakusan1.net/Manga/ForBoyNewest", script: "gen.js" }, 
        { title: "For Girl", input: "https://otakusan1.net/Manga/ForGirlNewest", script: "gen.js" },  
    ]);
}