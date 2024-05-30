load('config.js');
function execute(url) {
    url = url.replace(/^(?:https?:\/\/)?(?:[^@\n]+@)?(?:www\.)?([^:\/\n?]+)/img, BASE_URL);

    let response = fetch(url);
    if (response.ok) {
        let doc = response.html();
        let data = [];
        doc.select(".page-chapter img").forEach(e => {
            let img = e.attr("data-original");
            let imgReal = e.attr('data-real')
            if (!img) {
                img = e.attr("src");
            }
            if (imgReal) {
                if (imgReal.startsWith("//")) {
                    imgReal = "https:" + imgReal;
                }
            }
            if (img) {
                if (img.startsWith("//")) {
                    img = "https:" + img;
                }
                data.push({
                    link: img,
                    fallback: [
                        imgReal
                    ]
                });
            }
        });
        return Response.success(data);
    }
    return null;
}