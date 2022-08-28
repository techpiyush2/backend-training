
const statusCheck= ( req, res, next) => {
  
    const Header = req.headers

    if(Header.isfreeappuser) {
        next()
    } else {
        res.send("error : IsFreeAppUser header is not present ,Please enter ...")
    }
}

module.exports.statusCheck= statusCheck
