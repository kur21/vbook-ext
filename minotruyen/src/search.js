load('config.js');
function execute(key, page) {
    if (!page) page = '1';
    let new_url = BASE_URL + '/comics/search'
    let response = fetch(new_url, {
        queries: {
            page: page,
            q: key
        }
    });

    if(response.ok) {
        var data = {};
        let novelList = [];
        let next = '';

        const doc = response.html()
        const htmlString = doc.toString().replace(/\\/g, '');

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

        if (+page < data.countPage) {
            next = ++page
        }

        data && data.books && data.books.forEach(book => {
            const name = book.title;
            const link = `${BASE_URL}/comics/truyen/${book.slug}-${book.bookId}`;
            const description = `Chap ${book.chapters[0].num} - ${formatTimeAgo(book.chapters[0].createdAt)}`
            const cover = `${IMG_URL}/${book.thumbnail}`;
            const host = BASE_URL;

            novelList.push({ name, link, description, cover, host });
        })

        return Response.success(novelList, next)
    }

    return null;
}
