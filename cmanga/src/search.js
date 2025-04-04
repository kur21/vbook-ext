load('config.js');
function execute(key, page) {
    let response = fetch(API + "/home_album_list?type=search&string=" + key);
    if (response.ok) {
        let data = response.json().data;
        let comiclist = [];

        data.forEach(item => {
            const info = JSON.parse(item.info)
            comiclist.push({
                name: capitalizeWords(info.name),
                link: `${BASE_URL}/album/${info.url}-${info.id}`,
                cover: `${BASE_URL}/assets/tmp/album/${info.avatar}`,
                description: `Chapter ${info.chapter.last}`,
                host: BASE_URL
            });
        });
        
        return Response.success(comiclist);
    }
    return null;
}