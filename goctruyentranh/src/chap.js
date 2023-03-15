load('src.js');

function execute(url) {
    var browser = Engine.newBrowser();
    browser.launch(url, 10000);
    browser.callJs("var authorization = window.localStorage.getItem('Authorization'); var auth = document.createElement('auth'); auth.innerHTML = authorization; document.body.appendChild(auth);", 100);

    let doc = browser.html();

    var auth = doc.select("auth").text();
    var comicId = doc.select("head meta[property='og:image']").attr("content").match(/[0-9]{10}/)[0];
    var chapterNumber = url.slice(url.search('chuong-') + 7, url.length)

    browser.close();

    //check chapter
    var imgs = [];
    var el = doc.select(".viewer img");

    if(el.length == 1) {
        var response = fetch(`${BASE_URL}/api/chapter/auth?comicId=${comicId}&chapterNumber=${chapterNumber}`, {
            method: "POST",
            headers: {
                Authorization: auth
            },
        })
        imgs = response.json().result.data
    } else {
        el.forEach ( e => {
            imgs.push(e.attr("src"));
        })
    }
    return Response.success(imgs);
}