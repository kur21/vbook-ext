load('config.js');

function execute() {
    let response = fetch(BASE_URL + '/danh-sach');
    if(response.ok){
        let doc = response.html();
        let allItem = doc.select('.block-category .item-status')
        let data = [];

        allItem.forEach(e => data.push({
            title: e.select('span').text(),
            input: e.select('.cbox').attr('data-code'),
            script: 'source.js'
            })
        )
        return Response.success(data)
    }
    return null;
}