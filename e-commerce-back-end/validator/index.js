exports.userSignUpValidator = (req, res, next) => {
  req.check("name", "Name is required").notEmpty();
  req
    .check("name", "Name must contain at least 3 characters")
    .isLength({ min: 3 });

  // req.check('email', 'Email must be between 3 and 32 characters')
  // .matches(/.+\@.+\..+)
  // .withMessage("Email must contain @")
  // .isLength({
  //     min:4,
  //     max:32
  // })

  req
    .check("email")

    // General Email Regex (RFC 5322 Official Standard)
    .matches(
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    )
    .withMessage("incorrect email format");

  req.check("password", "Password is required").notEmpty();
  req
    .check("password")
    .isLength({ min: 6 })
    .withMessage("Password must contain at least 6 characters")
    .matches(/\d/)
    .withMessage("Password must contain a number");
  const errors = req.validationErrors();
  if (errors) {
    const firstError = errors.map((error) => error.msg)[0];
    return res.status(400).json({ error: firstError });
  }

  next();
};
