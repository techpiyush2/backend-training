const _ = require('lodash');

const oddNum = [1,3,5,7,9,11,13,15,17,19];

const tailArray = () => {
    console.log(_.tail(oddNum))
};

module.exports.tailArray = tailArray ;