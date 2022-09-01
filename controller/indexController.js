let cardapio = require('../data/data.json')


module.exports = indexController = {
    index(req,res){
        res.render('index', {menu:cardapio} )
    }
}

