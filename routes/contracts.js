const router = require("express").Router();
const isAuth = require('../middlewares/isAuth')
const { createContractRules, validator } = require("../middlewares/contractBodyValidator")
const { createContract, getAllContracts, getOneContract } = require('../controllers/contract.controller')

//POST
//contract posting
//PATH: http://localhost:6000/api/contract/
router.post("/", isAuth, createContractRules(), validator, createContract)

//GET
//getting all contracts
//PATH: http://localhost:6000/api/contract/
router.get("/", isAuth, getAllContracts)

//GET
//getting contract by id
//PATH: http://localhost:6000/api/contract/:id
//params id
router.get("/:id", isAuth, getOneContract);

module.exports = router;