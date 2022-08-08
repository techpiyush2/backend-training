const _ = require('lodash');


const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const chunkArray = () => {
      
      console.log(_.chunk(months,4))
}

module.exports.chunkArray = chunkArray ;

