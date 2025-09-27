load('config.js');

function execute(url) {
    let chapterId = url.split("#")[1]
    let response = fetch(`${BASE_URL}/ajax/image/list/chap/${chapterId}`, {
        method: 'POST'
    })
    if(response.ok) {
        var resData = response.json()
        var stringImgs = resData['html']
        var htmlString = Html.parse(stringImgs)
        var imgs = htmlString.select('.page-chapter > img');
        var data = [];
        for (var i = 1; i < imgs.size() - 1; i++) {
            let e = imgs.get(i);
            let fallback = []
            
            if(e.attr("data-original")) {
                let img = e.attr("data-original")
                if(img.indexOf("mangaqq.net") > -1) {
                    fallback.push(img.replace("ntcdn242.wibu.asia/qq", "ntcdn160.wibu.asia/bt").replace("i2.netcdn.one", "i2.wp.com/i2.netcdn.one"))
                }
                if(img.indexOf("i2.netcdn.one") > -1) {
                    fallback.push(img.replace("i2.netcdn.one", "manga-covers.vercel.app/api/proxy?url=https://i2.netcdn.one"))
                    fallback.push(img.replace("i2.netcdn.one", "https://wsrv.nl/?url=https://i2.netcdn.one"))
                }
            }
            if(e.attr("data-src")) fallback.push(e.attr("data-src"))
            data.push({
                link: e.attr("src"),
                fallback: fallback,
                // script: 'image.js'
            });
        }
        return Response.success(data);
    }
    return null;
}
