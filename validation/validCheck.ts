const validation = (schema) => async (req, res, next) => {
    const body = req.body;
    try {
      await schema.validate(body);
      console.log(body);
      next();
      return next();
    } catch (error) {
      console.log("valid", body);
      return res.status(400).json({ error });
    }
  };
  module.exports = validation;