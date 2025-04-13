load('config.js');

function execute() {
    const doc = Http.get(BASE_URL).html();
    const el = doc.select(".elementor-nav-menu .menu-item-object-category a");
    const data = [];
    for (var i = 0; i < el.size()-1; i++) {
        var e = el.get(i);
        data.push({
           title: e.text(),
           input: e.attr('href'),
           script: 'gen.js'
        });
    }
    
    
    return Response.success(data);
}