let axios = require("axios")

let getByDistricts = async function (req, res) {
    try{
        let district = req.query.district
        let date = req.query.date
        let options = {
            method: "get",
            url: `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByDistrict?district_id=${district}&date=${date}`
        }
        let result = await axios(options)
        res.status(200).send({ msg: result.data, status: true })
    } catch(err){
        res.status(500).send({msg: err.message})
    }}

const getWeather = async (req,res) => {
    try{
        let cities = ["Bengaluru","Mumbai", "Delhi", "Kolkata", "Chennai", "London", "Moscow"]
        let appId = req.query.appId
        
        let tempCity = [];
        
        for(let i= 0; i<cities.length; i++) {

            let options = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${cities[i]}&appid=${appId}`)
            tempCity[i] = {city: cities[i], temp: options.data.main.temp}
            
        } 

        sortedCity = tempCity.sort(function(a, b) {
            return a.temp - b.temp
        })
        res.status(200).send({status: true, data: sortedCity })

    }
    catch(err) {
        console.log(err)
        res.status(500).send({msg: err.message})
    }
  }

const getMemes = async (req,res) => {
 try{

    let options = {
        method: "get",
        url: `https://api.imgflip.com/get_memes`
    }
    let result = await axios(options)
    res.status(200).send({ msg: result.data, status: true })

 }catch(err) {
    console.log(err)
    res.status(500).send({msg: err.message})
}
}


  const createMemes = async (req, res)=> {

    try{
        let template_id = req.query.id
        let text0 = req.query.text0
        let text1 = req.query.text1
        let username = req.query.username
        let password = req.query.password

        let options = {
            method: `post`,
            url: `https://api.imgflip.com/caption_image?template_id=${template_id}&text0=${text0}&text1=${text1}&username=${username}&password=${password}`
        }
        let result = await axios(options)
        console.log(result)
        let data = result.data
        console.log(data)
        res.status(200).send({msg: data, status: true})
    }
    catch(err) {
        console.log(err);
        res.status(500).send({msg: err.message})
    }
}

module.exports.createMemes = createMemes
module.exports.getDistricts = getByDistricts
module.exports.getMemes = getMemes
module.exports.getWeather = getWeather