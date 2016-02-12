app.get('/api/Wagers', function(req, res) {

        // use mongoose to get all wagers in the database
        wager.find(function(err, wagers) {

            // if there is an error retrieving, send the error. nothing after res.send(err) will execute
            if (err)
                res.send(err)

            res.json(wagers); // return all wagers in JSON format
        });
    });
