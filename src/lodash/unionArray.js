const _ = require('lodash');

const array1 = [1,3,54,6,7,3,31,3,34];
const array2 = [4,2,4,77,2,1,54,67,3];
const array3 = [34,5,32,2,12,3,5,3,2,43]
const array4 = [4,7,3,56,32,6,3,32,56,34,]
const array5 = [33,56,32,2,54,64,32,3,53,34]

const unionArray = () => {
    console.log(_.union(array1,array2,array3,array4,array5))
}

module.exports.unionArray = unionArray ;