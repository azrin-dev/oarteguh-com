const countries = require('world-countries');

exports.reqCountries = async (req, res) => {
   var countryArr = [];
   const result = countries.reduce((acc, value) => {
      let name = value.name.common.toLowercase();
      console.log(name);
      if(value.name.common === req.body.country){
         countryArr.push()
      }
      acc = countryArr;
      return acc;
   }, []);
   res.json(result);
}