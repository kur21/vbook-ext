load('src.js');

function execute(key, page) {
    if(!page) page = '0';
    let response = fetch(BASE_URL + '/api/comic/search/',{
        method : "GET",
        queries : {
            name : key
        }
    });
    if(response.ok){
        let json = response.json();
        let allItem = json.result;
        if(allItem){
            let data = [];
            allItem.forEach(item => data.push({
                name: item.name,
                link: BASE_URL + '/truyen/'+item.nameEn,
                cover: item.photo,
                description: 'Chap '+item.chapterLatest[0],
                host: BASE_URL
            }))
            return Response.success(data)
        }
    }
    return null;
}