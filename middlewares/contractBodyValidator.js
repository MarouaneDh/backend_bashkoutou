const { body, validationResult } = require("express-validator");

const createContractRules = () => [
    body("companyOne.name", "The first main company's name is required").notEmpty(),
    body("companyOne.headOffice", "The first company's head office is required").notEmpty(),
    body("companyOne.RCSNumber", "The first company's RCS number is required").notEmpty(),
    body("companyOne.RMNumber", "The first company's RMN number is required").notEmpty(),
    body("companyOne.RIDETNumber", "The first company's RIDET number is required").notEmpty(),
    body("companyTwo.name", "The second main company's name is required").notEmpty(),
    body("companyTwo.headOffice", "The second company's head office is required").notEmpty(),
    body("companyTwo.RCSNumber", "The second company's RCS number is required").notEmpty(),
    body("companyTwo.RMNumber", "The second company's RMN number is required").notEmpty(),
    body("companyTwo.RIDETNumber", "The second company's RIDET number is required").notEmpty(),
    body("projectAddress", "The project's address is required").notEmpty(),
    body("payAmoutwithoutTaxes", "The payment amount is required").notEmpty(),
    body("startDate", "The starting date is required").notEmpty(),
    body("expectedEndDate", "The expected ending date is required").notEmpty(),
    body("tasks", "The tasks are required").notEmpty(),
];

const validator = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).send({
            errors: errors.array().map((el) => ({
                msg: el.msg,
            })),
        });
    }
    next();
};

module.exports = {
    validator,
    createContractRules,
};