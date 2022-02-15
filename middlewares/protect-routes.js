function protectRoutes(req, res, next) {
  if (!res.locals.isAuth) {
    return res.redirect("/401");
  }

  if (req.path.startsWith("/admin") && !res.locals.isAdmin) {
    return res.redirec("/403");
  }

  next();
}

module.exports = protectRoutes;
