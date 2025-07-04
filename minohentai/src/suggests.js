load('config.js');
function execute(htmlString) {
    let newHtmlString = htmlString.replace(/\\/g, '');
    const startMarker = '"className":"grid lg:grid-cols-6 md:grid-cols-4 grid-cols-2 gap-3","children":[';
    const arrayStartIndex = newHtmlString.indexOf(startMarker);
    if (arrayStartIndex === -1) return [];
    let balance = 1;
    let arrayEndIndex = -1;
    for (let i = arrayStartIndex + startMarker.length; i < newHtmlString.length; i++) {
        if (newHtmlString[i] === '[') balance++;
        else if (newHtmlString[i] === ']') balance--;
        if (balance === 0) {
            arrayEndIndex = i;
            break;
        }
    }

    if (arrayEndIndex === -1) return [];
    const jsonString = newHtmlString.substring(arrayStartIndex + startMarker.length - 1, arrayEndIndex + 1);
    const arrayBooks = JSON.parse(jsonString)
    let list = arrayBooks.map(component => {
        if(component[3]) return component[3].book
        return;
    })

    const books = list.map(book => {
        return {
            name: book.title,
            link: `${BASE_URL}/hentai/truyen/${book.slug}-${book.bookId}`,
            description: book.chapters[0] ? `Chap ${book.chapters[0].num} - ${formatTimeAgo(book.chapters[0].createdAt)}` : 'Đang cập nhật',
            cover: `${IMG_URL}/${book.thumbnail}`,
            host: BASE_URL,
        }
    })

    return Response.success(books);
}