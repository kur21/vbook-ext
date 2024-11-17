load('config.js');
function execute(url) {

    let chapterId = /mangas\/(\d+)\/?/.exec(url)[1];

    let response = fetch(BASE_URL + "/api/v2/mangas/" + chapterId, {
        method: "GET",
        headers: {
            M4u_token: TOKEN,
            M4u_uid: UID
        }
    });

    if (response.ok) {
        let json = response.json();
        let data = json.data;

        let ongoing = data.tags.length == 0 || data.tags.filter(tag => tag.slug === 'da-hoan-thanh').length == 0;
        let detail = `${data.author.name}<br>${data.chapters_count} Chương<br>Lượt xem: ${data.views_count}<br>${data.description}`;
        let genres = data.tags.map(tag => ({
            title: `${tag.name}(${tag.tagging_count})`,
            input: BASE_URL + `/api/v2/tags/${tag.slug}`,
            script: "genres.js"
        }))
        let suggests = data.team.id ? [{
            title: "Đề xuất",
            input: BASE_URL + "/api/v2/mangas/suggested_a?team_id=" + data.team.id,
            script: "suggests.js"
        }] : []
        

        return Response.success({
            name: data.name,
            cover: data.cover_url,
            author: data.author.name,
            description: data.full_description,
            detail: detail,
            ongoing: ongoing,
            genres: genres,
            suggests: suggests
        });
    }

    return null;
}