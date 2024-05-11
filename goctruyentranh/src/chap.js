load('src.js');

function execute(url) {
    var response = fetch(url)
    if(response.ok) {
        var imgs = []

        let doc = response.html()
        let elm = doc.select('.main-images .image-section .img-block img')

        if(elm.empty) {
            let doc_text = doc.toString()
            let bookId = doc_text.match(/id: "(\d+)"/)[1];
            let json = fetch(`${BASE_URL}/api/chapter/auth?comicId=${bookId}&chapterNumber=${1}`, {
                method : "POST",
                headers : {
                    Referer: url,
                    Authorization: TOKEN
                },
            }).json();
            Console.log(JSON.stringify(json.result.data))
            imgs = json.result.data;
        }
        
        elm.forEach(e => {
            imgs.push(e.attr('src'))
        })


        return Response.success(imgs);
    }

    

}