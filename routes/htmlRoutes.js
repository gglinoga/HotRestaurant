module.exports = html(app) {
        // API GET Requests
        // Below code handles when users "visit" a page.
        // In each of the below cases when a user visits a link
        // (ex: localhost:PORT/api/admin... they are shown a JSON of the data in the table)
        // ---------------------------------------------------------------------------

        app.get("/", function (req, res) {
            res.sendFile(path.join(__dirname, "home.html"));
        });

        app.get("/reserve", function(req, res) {
            res.sendFile(path.join(__dirname, "reserve.html"));
        });

        app.get("/tables", function(req, res) {
            res.sendFile(path.join(__dirname, "tables.html"));
        });

    }