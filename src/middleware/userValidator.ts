import Joi from 'joi';

const passwordPattern = /(?=.*[A-Za-z])(?=.*[0-9])/;

export const userSchema = Joi.object({
  login: Joi.string().required(),
  password: Joi.string().regex(passwordPattern).required(),
  age: Joi.number().min(4).max(130).required()
});

const errorResponse = (schemaErrors) => {
  const errors = schemaErrors.map((error) => {
    const { path, message } = error;

    return { path, message };
  });

  return {
    status: 'Error 400',
    errors
  };
};

export const validateSchema = (schema) => {
  return (req, res, next) => {
    const { error } = schema.validate(req.query, {
      abortEarly: false,
      allowUnknown: false
    });

    if (error?.isJoi) {
      res.status(400).json(errorResponse(error.details));
    } else {
      // eslint-disable-next-line callback-return
      next();
    }
  };
};
