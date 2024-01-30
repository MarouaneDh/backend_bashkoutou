const router = require("express").Router();
const isAuth = require('../middlewares/isAuth')
const { createContractRules, validator } = require("../middlewares/contractBodyValidator")
const { createContract, getAllContracts } = require('../controllers/contract.controller')

//POST
//contract posting
//PATH: http://localhost:6000/api/contract/
router.post("/", isAuth, createContractRules(), validator, createContract)

//GET
//getting all contracts
//PATH: http://localhost:6000/api/contract/
router.get("/", isAuth, getAllContracts)

module.exports = router;