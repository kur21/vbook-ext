load('config.js');
function execute(url, page) {
    if (!page) page = '1';
    let new_url = BASE_URL + url
    let response = fetch(new_url, {
        queries: {
            page: page
        }
    });

    if(response.ok) {
        var data = {};
        let novelList = [];
        let next = '';

        const doc = response.html()
        const htmlString = doc.toString().replace(/\\/g, '');

        if (url.includes('the-loai') || url.includes('search')) {
            let booksRegex = /"books":(\[.*?\]}])/
            let booksMatch = htmlString.match(booksRegex);
            let countPageRegex = /"countPage":(\d+)/;
            let countPageMatch = htmlString.match(countPageRegex);
            let books = JSON.parse(fixAllTitleQuotes(booksMatch[1]));
            let countPage = parseInt(countPageMatch[1], 10);
            data = {
                books: books,
                countPage: countPage
            };
        } else {
            let regex = /self\.__next_f\.push\(\[1,"(1c:[\s\S]*?)"\]\)/;
            let match = htmlString.match(regex);
            if (match && match[1]) {
                let rawData = match[1];
                let cleanString = rawData.replace(/^1c:/, '').replace(/n$/, '');
                cleanString = cleanString.replace(/"\$D(.*?)"/g, '"$1"');
                cleanString = fixAllTitleQuotes(cleanString)
                let jsonData = JSON.parse(cleanString);
                let sourceComicsArray = jsonData[1][3].children;
                let formattedComics = sourceComicsArray.map(comicItem => comicItem[3].book);
                let paginationObject = jsonData[2][3].children[3];
                let totalPages = paginationObject.countPage;
                data = {
                    books: formattedComics,
                    countPage: totalPages
                }
            }
        }

        if (+page < data.countPage) {
            next = ++page
        }

        data && data.books && data.books.forEach(book => {
            const name = book.title;
            const link = `${BASE_URL}/hentai/truyen/${book.slug}-${book.bookId}`;
            const description = book.chapters[0] ? `Chap ${book.chapters[0].num} - ${formatTimeAgo(book.chapters[0].createdAt)}` : 'Đang cập nhật';
            const cover = `${IMG_URL}/${book.thumbnail}`;
            const host = BASE_URL;

            novelList.push({ name, link, description, cover, host });
        })

        return Response.success(novelList, next)
    }

    return null;
}
