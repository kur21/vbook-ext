load('libs.js')
function execute(key) {
    let allItem = fetch('https://cmangaz.com/api/search?opt1='+key).json()
    let data = [];
    allItem.forEach(item => data.push({
            name: titleCase(item.name),
            link: item.url+'-'+item.id_book,
            cover: 'https://cmangaz.com/assets/tmp/book/avatar/'+item.avatar+'.jpg',
            description: 'Chap '+ item.last_chapter,
            host: "https://cmangaz.com"
        })
    );
    return Response.success(data)
}
