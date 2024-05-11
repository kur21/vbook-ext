load('config.js');
function execute(key, page) {
    let response = fetch(API + "/search?string=" + key);
    if (response.ok) {
        let data = response.json();
        let comiclist = [];

        data.forEach(item => {
            const info = JSON.parse(item.info)
            comiclist.push({
                name: capitalizeWords(info.name),
                link: `${BASE_URL}/album/${info.url}-${info.id}`,
                cover: `${BASE_URL}/assets/tmp/album/${info.avatar}`,
                description: capitalizeFirstLetter(info.name),
                host: BASE_URL
            });
        });
        
        return Response.success(comiclist);
    }
    return null;
}