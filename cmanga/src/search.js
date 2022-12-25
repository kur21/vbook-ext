load('libs.js');
load('src.js');
function execute(key) {
    let allItem = fetch(src+'/api/search?opt1='+key).json()
    let data = [];
    allItem.forEach(item => data.push({
            name: titleCase(item.name),
            link: item.url+'-'+item.id_book,
            cover: src+'/assets/tmp/book/avatar/'+item.avatar+'.jpg',
            description: 'Chap '+ item.last_chapter,
            host: src
        })
    );
    return Response.success(data)
}
