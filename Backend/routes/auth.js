const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");

router.post("/register", authController.register);
router.post("/login", authController.login);
router.get("/session", (req, res) => {
        res.json({ loggedIn: true, userId: req.session.userId });
});
router.post("/logout", authController.logout);

module.exports = router;