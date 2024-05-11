load('config.js');
function execute() {
    
    let response = fetch(API + '/data?data=album_tags');
    if (response.ok) {
        let data = response.json();
        let genre_list = [];

        Object.entries(data).forEach(([key, value]) => {
            genre_list.push({
                title: value['name'],
                input: API + '/home_album_list?sort=update&tag=' + value['url'],
                script: 'gen.js'
            })
        });

        return Response.success(genre_list);
    }
    return null;
}