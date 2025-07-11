load('config.js');

function execute(url) {
    url = url.replace(/^(?:https?:\/\/)?(?:[^@\n]+@)?(?:www\.)?([^:\/\n?]+)/img, BASE_URL);
    var browser = Engine.newBrowser();
    browser.launch(url, 1000);
    browser.callJs(`
    const allCanvases = document.querySelectorAll('.w-full.mx-auto.relative canvas');
    allCanvases.forEach((canvas, index)=>{ 
        const parent = canvas.parentNode;
        parent.innerHTML = '';

        const STRIP_HEIGHT = 200;
        const SOURCE_WIDTH = canvas.width;

        for (let y = 0; y < canvas.height; y += STRIP_HEIGHT) {
            const stripCanvas = document.createElement('canvas');
            const stripCtx = stripCanvas.getContext('2d');

            const heightOfStrip = Math.min(STRIP_HEIGHT, canvas.height - y);
            stripCanvas.width = SOURCE_WIDTH;
            stripCanvas.height = heightOfStrip;

            stripCtx.drawImage(
                canvas, 
                0, y, SOURCE_WIDTH, heightOfStrip,
                0, 0, SOURCE_WIDTH, heightOfStrip
            );
            const stripDataURL = stripCanvas.toDataURL('image/png');
            const imgElement = document.createElement('img');
            imgElement.src = stripDataURL;
            
            parent.appendChild(imgElement);
        }
    });`, 2000)
    const doc = browser.html();
    browser.close();
    

    if(doc) {
        var data = [];
        const listElm = doc.select('.w-full.mx-auto.relative > div > *')
        listElm.forEach(elm => {
            data.push({
                link: elm.attr('src'),
                script: 'image.js'
            })
        })
        return Response.success(data);
    }
    return null;
}
