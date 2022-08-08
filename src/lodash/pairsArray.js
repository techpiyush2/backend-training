const _ = require('lodash');

const movies = [['key1','value1'],['key2','value2'],['key3','value3'],['key4','value4'],['key5','value5']]

const pairsArray = () => {
    console.log(_.fromPairs(movies))
}

module.exports.pairsArray = pairsArray ;