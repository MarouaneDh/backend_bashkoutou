const mongoose = require("mongoose");

const schema = mongoose.Schema;

const contractSchema = new schema({
    companyOne: {
        name: {
            type: String,
            required: true,
        },
        headOffice: {
            type: String,
            required: true,
        },
        RCSNumber: {
            type: String,
            required: true,
        },
        RMNumber: {
            type: String,
            required: true,
        },
        RIDETNumber: {
            type: String,
            required: true,
        }
    },
    companyTwo: {
        name: {
            type: String,
            required: true,
        },
        headOffice: {
            type: String,
            required: true,
        },
        RCSNumber: {
            type: String,
            required: true,
        },
        RMNumber: {
            type: String,
            required: true,
        },
        RIDETNumber: {
            type: String,
            required: true,
        }
    },
    projectAddress: {
        type: String,
        required: true,
    },
    payAmoutwithoutTaxes: {
        type: String,
        required: true,
    },
    startDate: {
        type: String,
        required: true,
    },
    expectedEndDate: {
        type: String,
        required: true,
    },
    tasks: {
        type: Array,
        required: true,
    },
}, { timestamps: true });

module.exports = Contract = mongoose.model("contract", contractSchema);
