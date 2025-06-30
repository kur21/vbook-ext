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

    if(response.ok) {
        var imgs = []

        let doc = response.html()
        let elm = doc.select('.main-images .image-section .img-block img')

        if(elm.empty) {
            let doc_text = doc.toString()
            let bookId = doc_text.match(/id: "(\d+)"/)[1];
            let chapNumber = url.match(/chuong-(\d+)/)[1];
            let jsonString = doc_text.match(/chapterJson: `(.*?)`/)[1];
            let jsonParsed = jsonString && JSON.parse(jsonString);
            let chaps = jsonParsed && jsonParsed.body.result.data

            if(chaps && chaps.length > 0) {
                imgs = chaps;
            } else {
                let json = fetch(`${BASE_URL}/api/chapter/auth?comicId=${bookId}&chapterNumber=${chapNumber}`, {
                    method : "POST",
                    headers : {
                        Referer: BASE_URL,
                        Authorization: TOKEN,
                        'user-agent': USER_AGENT,
                    },
                }).json();
                imgs = json.result.data;
            }
        } else {
            elm.forEach(e => {
                let url = e.attr('src')
                imgs.push(url)
            })
        }

        var newImgs = []
        imgs.forEach(img => {
            newImgs.push({
                // script: "image.js",
                // 'user-agent': USER_AGENT,
                'referer': BASE_URL,
                link: img.includes('https') ? img : `${BASE_URL}${img}`
            })
        })

        return Response.success(newImgs);
    }
}