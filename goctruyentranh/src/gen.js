load('src.js');

function execute(url, page) {
    if(!page) page = '0';
    let response = fetch(BASE_URL + '/api/comic/search/'+url,{
        method : "GET",
        queries : {
            p : page
        }
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