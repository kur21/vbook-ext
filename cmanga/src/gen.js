load('config.js');
function execute(url, page) {
    if (!page) page = '1';
    let response = fetch(url + `&child_protect=off&page=${page}`);
    if (response.ok) {
        let res = response.json();
        const data = res.data

        let comiclist = [];
        let next = ++page;

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
        return Response.success(comiclist, next);
    }
    return null;
}