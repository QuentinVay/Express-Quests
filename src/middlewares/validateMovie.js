const Joi = require("joi");

const movieSchema = Joi.object({
  title: Joi.string().max(255).required(),
  director: Joi.string().required(),
  year: Joi.number().required(),
  color: Joi.string().required(),
  duration: Joi.number().required(),
});

const validateMovie = (req, res, next) => {
  const { title, director, year, color, duration } = req.body;

  const { error } = movieSchema.validate(
    { title, director, year, color, duration },
    { abortEarly: false }
  );

  if (error) {
    res.status(422).json({ validationErrors: error.details });
  } else {
    next();
  }
};

module.exports = validateMovie;
