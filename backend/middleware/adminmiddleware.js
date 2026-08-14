const admin = (req, res, next) => {
    console.log("USER ROLE =", req.user?.role);
    console.log("USER =", req.user);

    if (req.user && req.user.role === "admin") {
        return next();
    }

    return res.status(403).json({
        message: "Access denied, admin only"
    });
};

module.exports = { admin };