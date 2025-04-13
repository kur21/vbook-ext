load('config.js');

function execute() {
    return Response.success([
        {title: "Latest", input: BASE_URL, script: "gen.js"},
        {title: "Cosplay", input: BASE_URL + "/category/cosplay", script: "gen.js"},
        {title: "Korean", input: BASE_URL + "/category/korean", script: "gen.js"},
        {title: "Europe", input: BASE_URL + "/category/eu-girls", script: "gen.js"},
        {title: "Japan", input: BASE_URL + "/category/japan", script: "gen.js"},
        {title: "China", input: BASE_URL + "/category/china", script: "gen.js"},
        {title: "AIModel", input: BASE_URL + "/category/aimodel", script: "gen.js"},
    ]);
}