load('config.js');

function execute(url) {
    url = url.replace(/^(?:https?:\/\/)?(?:[^@\n]+@)?(?:www\.)?([^:\/\n?]+)/img, BASE_URL);
    let arr_url = url.split('-')
    let manga_id = arr_url.pop()

    let response = fetch(API + '/chapter_list?limit=1000000&album=' + manga_id);
    if (response.ok) {
        let data = response.json();
        const list_chap = [];

        data.reverse().forEach(chap => {
            list_chap.push({
                name: 'Chapter ' + JSON.parse(chap.info).num,
                url: API + '/chapter_image?chapter=' + chap.id_chapter,
                host: BASE_URL
            });
        })

        return Response.success(list_chap);
    }

    return null;
}