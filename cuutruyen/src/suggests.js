load('config.js');
function execute(url, page) {

    if (!page) page = '1';
    let response = fetch(url, {
        method: "GET",
        headers: {
            M4u_token: TOKEN,
            M4u_uid: UID
        }
    });

    if (response.ok) {
        let json = response.json();
        let data = json.data.suggested_mangas
        let novels = [];
        data.forEach(item => {
            novels.push({
                name: item.name,
                link: BASE_URL + "/mangas/" + item.id,
                cover: item.cover_url,
                description: `C. ${item.newest_chapter_number}`,
                host: BASE_URL
            })
        });

        return Response.success(novels);
    }

    return null;
}