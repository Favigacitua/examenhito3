import { Validator } from "jsonschema";

const validator = new Validator();

const schemaValidator = (schema) => {
  return (req, res, next) => {
    const validate = validator.validate(req.body, schema);
    const errors = [];
    if (!validate.valid) {
      validate.errors.forEach(e => {
        errors.push(e.message.replace(/\"/g, ''));
      });

      res.json({
        errors
      });
      return;
    }
    next();
  }
}

export { schemaValidator };
