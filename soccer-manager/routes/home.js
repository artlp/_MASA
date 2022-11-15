module.exports = {
    getHomePage: (req, res) => {
        let query = 'SELECT * FROM players ORDER BY last_name ASC';
        db.query(query, (err, result) => {
            if (err) {
                console.log(`query: ${query}, error: ${err}`);
                res.redirect('/');
            } else {
                res.render('index.ejs',
                    {
                        title: 'Soccer-Manager | Home',
                        players: result,
                    });
            }
        });
    }
};