const Contract = require('../models/Contract')

const createContract = async (req, res) => {
    try {
        const contract = new Contract(req.body);
        await contract.save();
        res.status(201).send({ msg: "Contract created with success", contract });
    } catch (error) {
        res.status(400).send({ message: "Not able to save contract" });
    }
};

const getAllContracts = async (req, res) => {
    try {
        const page = req.query.page;
        const limit = req.query.limit;
        const total = await Contract.countDocuments();
        const result = await Contract.find()
            .limit(limit * 1)
            .skip((page - 1) * limit);

        res.send({
            page,
            total,
            limit,
            response: result,
            message: "Got all contracts with success",
        });
    } catch (error) {
        res.status(400).send({ message: "Can't get contracts" });
    }
};

module.exports = {
    createContract,
    getAllContracts
}