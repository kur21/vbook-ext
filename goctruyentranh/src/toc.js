load('src.js');

function execute(url) {
    let response = fetch(url);
    if(response.ok){
        let doc = response.text();
        let bookId = doc.match(/id: "(\d+)"/)[1];
        let json = fetch(BASE_URL + '/api/comic/'+bookId+'/chapter?limit=-1', {
            method : "GET",
            headers : {
                'Referer': BASE_URL + '/danh-sach'
            },
        }).json();
        let allChap = json.result.chapters;
        let data = [];
        for (let i = allChap.length -1; i >= 0; i--) {
            let chap = allChap[i]
            if(chap.type !== 'DOUBLE') {
                data.push({
                    name: '#'+ chap.numberChapter,
                    url: url + '/chuong-'+chap.numberChapter,
                    host: BASE_URL + '/danh-sach'
                })
            }
        }
        return Response.success(data)
    }
    return null;
}