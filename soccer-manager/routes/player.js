module.exports = {
    getAddPage: (req, res) => {
        res.render('add-player.ejs',
            {
                title: 'Soccer-Manager | Add player',
                message: "",
            });
    },
    addPlayer: (req, res) => {
        if (!req.files) {
            res.status(400).send("No files were uploaded");
        }
        //*req.body was parsed by express and now it's an object with properties
        //* as the names of the input fields
        let message = '';
        let firstName = req.body.first_name;
        let lastName = req.body.last_name;
        let userName = req.body.username;
        let number = req.body.first_name;
        let position = req.body.number;
        let image = req.files.image;
        let extension = image.mimetype.split('/')[1];
        let imageName = userName + '.' + extension;
        console.log(imageName);
        let query = `SELECT * FROM players WHERE user_name = '${userName}'`;
        db.query(query, (err, result) => {
            if (err) {
                res.status(500).send(`Query for existing user, err: \n`, err);
            }
            if (result.length > 0) {
                message = 'Error: this player already exists';
                res.render('add-player.ejs',
                {
                    title: 'Soccer-Manager | Add player',
                    message: message,
                });
            }
        });

        console.log("addplayer");
    },
    editPlayer: (req, res) => {

    },
    deletePlayer: (req, res) => {

    }
};