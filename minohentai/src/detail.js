load('config.js');

function execute(url) {
    url = url.replace(/^(?:https?:\/\/)?(?:[^@\n]+@)?(?:www\.)?([^:\/\n?]+)/img, BASE_URL);
    let response = fetch(url);

    if (response.ok) {
        const data = {};
        const doc = response.html()
        const htmlString = doc.toString().replace(/\\/g, '');

        // name
        const nameRegex = /"className":"uppercase lg:leading-snug lg:text-4xl[^"]*","children":"([^"]+)"/;
        const nameMatch = htmlString.match(nameRegex);
        if (nameMatch && nameMatch[1]) {
            data.name = nameMatch[1];
        }

        // altName replace author
        const altNameRegex = /"className":"font-bold text-lg mb-3","children":"([^"]+)"/;
        const altNameMatch = htmlString.match(altNameRegex);
        if (altNameMatch && altNameMatch[1]) {
            data.author = altNameMatch[1];
        } else {
            data.author = '(〜￣▽￣)〜';
        }

        // genres
        const genresRegex = /"Đọc mới nhất"[\s\S]*?"className":"flex flex-wrap gap-2","children":(\[[\s\S]*?\]})/;
        const genresMatch = htmlString.match(genresRegex);
        if (genresMatch && genresMatch[1]) {
            let capturedString = genresMatch[1];
            let jsonString = capturedString.substring(0, capturedString.length - 1);
            let rawChildrenArray = JSON.parse(jsonString);
            data.genres = rawChildrenArray.map(genreItem => {
                const genreData = genreItem[3]; 
                return {
                    title: genreData.title,
                    input: genreData.href,
                    script: "gen.js"
                };
            });
        }

        // description
        const descRegex = /"sumary":"(.*?)"}]]/;
        const descMatch = htmlString.match(descRegex);
        if (descMatch && descMatch[1]) {
            data.description = descMatch[1].replace(/\\"/g, '"');
        }

        // Cover 
        const coverRegex = /"className":"absolute left-0 top-0 w-\[100%\] h-\[150%\] object-cover object-top","src":"([^"]+)"/;
        const coverMatch = htmlString.match(coverRegex);
        if (coverMatch && coverMatch[1]) {
            data.cover = coverMatch[1];
        }

        // suggests
        data.suggests = [
            {
                title: "Truyện cùng thể loại",
                input: htmlString,
                script: "suggests.js"
            }
        ]

        // more info
        data.detail = `Tên truyện: ${data.name} <br>Tên khác: ${data.author}`
        data.ongoing = true
        data.host = BASE_URL

        return Response.success(data)
    }

    return null;
}