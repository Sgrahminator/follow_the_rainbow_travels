module.exports.requireAuth = (req, res, next) => {
    
    if (req.isAuthenticated()) {
        return next();
    }
    return res.status(401).json({ error: 'Unauthorized access' });
};
