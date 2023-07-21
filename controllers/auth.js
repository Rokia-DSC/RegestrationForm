const { validationResult } = require("express-validator");

exports.getSignup = (req, res, next) => {
    let message = req.flash("error");
    if (message.length > 0) {
      message = message[0];
    } else {
      message = null;
    }
    res.render("auth/signup", {
      path: "/signup",
      pageTitle: "Signup",
      errorMessage: message,
      oldInput: {
        email: "",
        password: "",
        confirmPassword: "",
      },
      validationErrors: [],
    });
};

exports.postSignup = (req, res, next) => {
    const email = req.body.email;
    const password = req.body.password;
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      console.log(errors.array());
      return res.status(422).render("auth/signup", {
        path: "/signup",
        pageTitle: "Signup",
        errorMessage: errors.array()[0].msg,
        oldInput: {
          email: email,
          password: password,
          confirmPassword: req.body.confirmPassword,
        },
        validationErrors: errors.array(),
      });
    }
    bcrypt
      .hash(password, 12)
      .then((hashedPassword) => {
        //                         adding new user to db
        // const user = new User({
        //   email: email,
        //   password: hashedPassword,
        //   cart: { items: [] },
        // });
        // // return user.save();
      })
      .catch((err) => {
        const error = new Error(err);
        error.httpStatusCode = 500;
        return next(error);
      });
  };
  