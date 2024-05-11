load('src.js');

function execute(key, page) {
    if(!page) page = '0';
    let response = fetch(BASE_URL + `/api/v2/search?p=${page}&searchValue=${key}&orders%5B%5D=updatedAt`, {
        method : "GET",
        headers : {
            'Referer': BASE_URL + '/danh-sach'
        },
    });
    if(response.ok){
        let json = response.json();
        let allItem = json.result.data;
        if(json.result.next === true) let next = (parseInt(page) + 1).toString();
        else next = null;
        if(allItem){
            let data = [];
            allItem.forEach(item => data.push({
                name: item.name,
                link: BASE_URL + '/truyen/'+item.nameEn,
                cover: item.photo,
                description: 'Chap '+item.chapterLatest[0],
                host: BASE_URL
            }))
            return Response.success(data,next)
        }
    }
    return null;
}