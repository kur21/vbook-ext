load('src.js');

function execute(url) {
    url = url.replace(/^(?:https?:\/\/)?(?:[^@\n]+@)?(?:www\.)?([^:\/\n?]+)/img, BASE_URL);
    var response = fetch(url)
    if(response.ok) {
        var imgs = []

        let doc = response.html()
        let elm = doc.select('.main-images .image-section .img-block img')
        Console.log(elm)
        if(elm.empty) {
            let doc_text = doc.toString()
            let bookId = doc_text.match(/id: "(\d+)"/)[1];
            let chapNumber = url.match(/chuong-(\d+)/)[1];
            let json = fetch(`${BASE_URL}/api/chapter/auth?comicId=${bookId}&chapterNumber=${chapNumber}`, {
                method : "POST",
                headers : {
                    Referer: url,
                    Authorization: TOKEN
                },
            }).json();
            imgs = json.result.data;
        }
        
        elm.forEach(e => {
            let url = e.attr('src')
            url = url.includes('https') ? url : BASE_URL + url
            imgs.push(url)
        })

        return Response.success(imgs);
    }

    

}