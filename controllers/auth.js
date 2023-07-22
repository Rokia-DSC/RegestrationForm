const { validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");

const express = require('express');//add new user
const { PrismaClient } = require('@prisma/client');//add new user rokia modified

const prisma = new PrismaClient();//add new user rokia modified

const app = express();//add new user rokia modified

app.get("/" , async (req, res) => {//add new user rokia modified
  const allUsers = await prisma.UsersTBL.findMany();
  res.json(allUsers);
});

app.post("/",async (req,res) =>{//add new user rokia modified
  const newUser = await prisma.UsersTBL.create({data : req.body});
  res.json(newUser);
});

exports.getSignup = (req, res, next) => {
    // let message = req.flash("error");
    // if (message.length > 0) {
    //   message = message[0];
    // } else {
    //   message = null;
    // }
    res.render("auth/signup", {
      path: "/signup",
      pageTitle: "Signup",
    //   errorMessage: message,
      oldInput: {
        fname:"",
        lname: "",
        email: "",
        role: "",
        password: "",
        confirmPassword: "",
      },
      validationErrors: [],
    });
};

exports.postSignup = (req, res, next) => {
    const fname = req.body.fname;
    const lname = req.body.lname; 
    const email = req.body.email;
    const role = req.body.role;
    const password = req.body.password;
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      console.log(errors.array());
      return res.status(422).render("auth/signup", {
        path: "/signup",
        pageTitle: "Signup",
        errorMessage: errors.array()[0].msg,
        oldInput: {
          fname: fname,
          lname: lname,
          email: email,
          role: role,
          password: password,
          confirmPassword: req.body.confirmPassword,
        },
        validationErrors: errors.array(),
      });
    }
    bcrypt
      .hash(password, 12)
      .then((hashedPassword) => {
// Create a new user rokia modified
    app.post('/users', async (req, res) => {
      const { fname,lname, email, role, password } = req.body
      const user = await prisma.UsersTBL.create({
        data: {
          firstName,
          lastName,
          email,
          role,
          password
        }
      })

      res.json(user)
    })

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
  