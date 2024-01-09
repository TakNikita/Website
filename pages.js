const express = require("express");
const router = express.Router();
const auth = require("../autorisation/auth");

router.get("/", (req, res) => {
  res.render("home");
});
router.get("/privacy", (req, res) => {
  res.render("privacy.hbs");
});
router.get("/termsandconditions", (req, res) => {
  res.render("termsandconditions.hbs");
});
router.get("/reliconnectprivacy", (req, res) => {
  res.render("reliconnectprivacy.hbs");
});
router.get("/reliconnecttermsandconditions", (req, res) => {
  res.render("reliconnecttermsandconditions.hbs");
});
router.get("/creditsandlicenses", (req, res) => {
  res.render("creditsandlicenses.hbs");
});
router.get("/forms/contact.php", (req, res) => {
  res.render("contact.php");
});

router.get("/contactus", auth, (req, res) => {
  if (req.user) {
    res.render("contactus", {
      isnotloggedin: false,
      user: req.user,
    });
  } else {
    res.render("contactus", {
      isnotloggedin: true,
    });
  }
});

router.get("/logout", (req, res) => {
  res.clearCookie("jwt");
  res.clearCookie("google-token"); //to logout we will remove the cookie so no authentication can be done now hence can't access private pages;

  res.redirect("/");
});
module.exports = router;
