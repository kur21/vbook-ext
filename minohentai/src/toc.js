load('config.js');
function execute(url) {
    url = url.replace(/^(?:https?:\/\/)?(?:[^@\n]+@)?(?:www\.)?([^:\/\n?]+)/img, BASE_URL);
    let response = fetch(url);
    
    if(response.ok) {
        var data = []

        const doc = response.html()
        const htmlString = doc.toString().replace(/\\/g, '');
        const regex = /DANH SÁCH CHƯƠNG.*?chapters":(\[.*?\])/;
        const match = htmlString.match(regex);
        if(match && match[1]) {
            const chaptersJsonString = match[1];
            data = JSON.parse(chaptersJsonString);
        }

        const list = data.map(book => {
            return {
                name: `Chapter ${book.num}`,
                url: `${url}/chapter-${book.num}-${book.chapterNumber}`,
                host: BASE_URL
            }
        }).reverse()

        return Response.success(list);
    }

    return null;
}