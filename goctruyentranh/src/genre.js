load('src.js');

function execute() {
    let response = fetch(BASE_URL + '/api/category');
    if(response.ok){
        let json = response.json();
        let allItem = json.result
        let data = [];
        allItem.forEach(e =>data.push({
            title: e.name,
            input: e.id,
            script: 'source.js'
            })
        )
        return Response.success(data)
    }
    return null;
}