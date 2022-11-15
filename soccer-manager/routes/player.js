module.exports = {
    getAddPage: (req, res) => {
        res.render('add-player.ejs',
            {
                title: 'Soccer-Manager | Add player',
                message: "",
            });
    },
    addPlayer: (req, res) => {
        
    },
    editPlayer: (req, res) => {

    },
    deletePlayer: (req, res) => {

    }
};