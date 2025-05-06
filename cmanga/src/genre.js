load('config.js');
function execute() {
    
    let response = fetch(BASE_URL + '/assets/json/album_tags_image.json');
    if (response.ok) {
        let data = response.json().list;
        let genre_list = [];

        Object.entries(data).forEach(([key, value]) => {
            genre_list.push({
                title: capitalizeWords(value['name']),
                input: API + '/home_album_list?sort=update&tag=' + value['name'],
                script: 'gen.js'
            })
        });

        return Response.success(genre_list);
    }
    return null;
}