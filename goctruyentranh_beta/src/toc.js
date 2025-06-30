load('config.js');

function execute(url) {
    url = url.replace(/^(?:https?:\/\/)?(?:[^@\n]+@)?(?:www\.)?([^:\/\n?]+)/img, BASE_URL);
    var response = fetch(url, {
        method : "GET",
        headers : {
            Referer: BASE_URL,
            'user-agent': USER_AGENT,
        }
    })
    if(response.ok){
        let doc = response.text();
        let bookId = doc.match(/id: "(\d+)"/)[1];
        let json = fetch(BASE_URL + '/api/comic/'+bookId+'/chapter?limit=-1', {
            method : "GET",
            headers : {
                Referer: BASE_URL + '/danh-sach',
                Authorization: TOKEN,
                'user-agent': USER_AGENT,
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