let adminMiddleware = function (req,res,next){
      if(req.session.usuarioLogueado.rol == 'admin'){
          res.locals.isAdmin = true
          res.locals.adminLogueado = req.session.usuarioLogueado 
          next();
      } else {
          res.render('error');
      }
        
}

module.exports = adminMiddleware;
