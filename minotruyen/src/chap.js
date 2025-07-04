load('config.js');

function execute(url) {
    url = url.replace(/^(?:https?:\/\/)?(?:[^@\n]+@)?(?:www\.)?([^:\/\n?]+)/img, BASE_URL);
    let response = fetch(url);
    
    if (response.ok) {
        var data = []
        const doc = response.html()
        const htmlString = doc.toString().replace(/\\/g, '');
        let imageArrayRegex = /"cloud":"NV1","content":(\[[\s\S]*?\])(?=}],)/;
        if(htmlString.includes('"cloud":"NV2"')) {
            imageArrayRegex = /"cloud":"NV1","content":(\[[\s\S]*?\])(?=},{"cloud":"NV2")/;
        }
        const match = htmlString.match(imageArrayRegex);

        if (match && match[1]) {
            const jsonString = match[1];
            const imagesArray = JSON.parse(jsonString);
            data = imagesArray.map(img => img.imageUrl)
        }

        return Response.success(data);
    }
    return null;
}
