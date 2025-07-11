function execute(link) {
    let base64 = link.replace('http://h.vn/', '')
    if(link.includes('https://')) {
        let response = fetch(link);
        if (response.ok) { 
            base64 = response.base64()
        }
    }
    return Graphics.createImage(base64)
}