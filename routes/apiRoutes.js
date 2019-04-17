module.exports = api (app) {
    // API GET Requests
    // Below code handles when users "visit" a page.
    // In each of the below cases when a user visits a link
    // (ex: localhost:PORT/api/admin... they are shown a JSON of the data in the table)
    // ---------------------------------------------------------------------------

    //Routes
    app.get("/api/tables", function (req, res) {
        return res.json(tables);
    })
};