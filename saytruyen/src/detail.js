function execute(url) {
    let response = fetch(url);

    if (response.ok) {
        let doc = response.html();
        return Response.success({
            name: doc.select("h1").first().text(),
            cover: doc.select(".summary_image img").first().attr("src"),
            author: doc.select(".post-content .post-content_item:nth-child(5) .summary-content").text(),
            description: doc.select(".description-summary .summary__content").html(),
            detail: doc.select(".post-content .post-content_item").html(),
            host: "https://saytruyen.com",
            ongoing: doc.select(".post-content").text().indexOf("OnGoing") >= 0
        });
    }

    return null;
}