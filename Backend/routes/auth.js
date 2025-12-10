const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");

router.post("/register", authController.register);
router.post("/login", authController.login);
router.get("/session", (req, res) => {
        if (!req.session.userId) {
        return res.json({ loggedIn: false });
    }
        res.json({ loggedIn: true, userId: req.session.userId });
});
router.post("/logout", authController.logout);
router.get("/me", (req, res) => {
        if(req.session.userId) {
                return res.json({ loggedIn: true, userId: req.session.userId });
    }
        res.json({ loggedIn: false });
});

module.exports = router;