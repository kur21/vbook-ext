load('crypto.js');
load('libs.js');
load('src.js');
function execute(url, page) {
    if (!page) page = '1';
    let response = fetch(src+'/api/list_item', {
        method: "GET",
        queries: {
            page : page,
            limit : '40',
            sort : url,
            type : 'all',
            child : 'off',
            status : 'all',
            num_chapter : '0'
        }
    });
    if (response.ok) {
        let doc = response.text();
        let data = JSON.parse(decrypt_data(doc));
        let allPage = Math.floor(data['total']/40);
        const next = (page < allPage) ? (parseInt(page) + 1).toString() : null;
        let list = [];
        for(let i = 0; i < 40; i++){
            let item = data[i];
            list.push({
                name: titleCase(item.name),
                link: item.url+'-'+item.id_book,
                cover: src+'/assets/tmp/book/avatar/'+item.avatar+'.jpg',
                description: 'Chap '+ item.last_chapter,
                host: src
            })
        }
        return Response.success(list,next)
    }
    return null;
}