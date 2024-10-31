function execute(url) {
    var request = Http.get(url);
    var doc = request.html();
    var dataChapterId = doc.select("#dataChapterId").attr("value");

    var json = fetch("https://otakusan1.net/Manga/UpdateView", {
    method: "POST", // GET, POST, PUT, DELETE, PATCH
    headers: {
        "cookie": request.cookie(),
        "referer": url
    },
    body: {"chapId": dataChapterId}
    }).text()
    
    var linkImage = JSON.parse(json).view.split(',')
    //return Response.success(linkImage[0].indexOf('ON')!=-1)
    var listLinkImage = []
    var link = ""
    if(linkImage[0].indexOf('ON')!=-1){
        var browser = Engine.newBrowser()
        browser.launch(url, 10000);

        browser.waitUrl(".*/ExtendContent.*[jpg|png|jpeg]?", 30000);

        var doc = browser.html()
        browser.close()
        var listLink =  doc.select("#rendering .image-wraper img.wide-pic")
        listLink.forEach(image => listLinkImage.push(image.attr("src"))
        )
        //return Response.success(listLinkImage);

    }
    else{

        var str_sync ="https://image.otakuscan.net/api/Value/ImageSyncing?url="
        // for(var i in linkImage){
        //     if(linkImage[i].indexOf('http')!=-1)
        //         link = linkImage[i].match(/(http.+[jpg|png|jpeg])/)[0]
        //     // if(linkImage[i].indexOf('ON')!=-1)
        //     //     link = str_sync + linkImage[i].match(/.ON(\d+).+[jpg|png|jpeg]/)[0]
        //     if(link.search('blogtruyen')>0)
        //         link = str_sync + link;
        //     listLinkImage.push(link)
        // }

        linkImage.forEach(image => {
            if(image.indexOf('ON')!=-1)
                link = str_sync + image.match(/.ON(\d+).+[jpg|png|jpeg]/)[0]
            if(image.indexOf('http')!=-1)
                link = image.match(/(http.+[jpg|png|jpeg])/)[0]
            listLinkImage.push(link)
        })
    }
    return Response.success(listLinkImage);
}
