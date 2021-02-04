module.exports.isAuthorized = (req, res, next) => {

    if (req.session && req.session.user == 'abc' && req.session.password == 'abc') {
        next();
    } else {
        res.locals.message = 'Forbidden';
        res.locals.error = { status: '403', stack: 'Acceso no permitido' }
        res.render('error')
    }

}