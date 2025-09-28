load('config.js');

function execute(url) {
    url = url.replace(/^(?:https?:\/\/)?(?:[^@\n]+@)?(?:www\.)?([^:\/\n?]+)/img, BASE_URL);
    let response = fetch(url);
    if(response.ok) {
        let jsonString = null
        const doc = response.html()
        const scripts = doc.select('script')
        scripts.forEach(e => {
            if(e.toString().includes('DANH SÁCH CHƯƠNG')) {
                const match = e.toString().match(/self\.__next_f\.push\(([\s\S]*)\)/);
                if (match && match[1]) {
                    return jsonString = match[1];
                }
            }
        });

        if(!jsonString) return null

        const startMatch = jsonString.match(/\\"chapters\\":\[/);
        if (!startMatch) return null;
        const startIndex = startMatch.index + startMatch[0].length - 1; // vị trí của [
        // Đếm brackets để tìm điểm kết thúc
        let bracketCount = 0;
        let endIndex = startIndex;

        for (let i = startIndex; i < jsonString.length; i++) {
            if (jsonString[i] === '[') bracketCount++;
            else if (jsonString[i] === ']') bracketCount--;
            if (bracketCount === 0) {
                endIndex = i;
                break;
            }
        }
        const chaptersString = jsonString.substring(startIndex, endIndex + 1);
        const chapters = JSON.parse(chaptersString.replace(/\\"/g, '"').replace(/\\\\"/g, ""));
        const list = chapters.map(book => {
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