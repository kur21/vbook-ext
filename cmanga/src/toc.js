load('config.js');

function execute(url) {
    let arr_url = url.split('-')
    let manga_id = arr_url.pop()

    let response = fetch(API + '/chapter_list?album=' + manga_id);
    if (response.ok) {
        let data = response.json();
        const list_chap = [];

        data.forEach(chap => {
            list_chap.push({
                name: JSON.parse(chap.info).name,
                url: API + '/chapter_image?chapter=' + chap.id_chapter,
                host: BASE_URL
            });
        })

        return Response.success(list_chap);
    }

    return null;
}