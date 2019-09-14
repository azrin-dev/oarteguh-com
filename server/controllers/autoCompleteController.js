// const countries = require('world-countries');
const countries = require('../json/places/country.json');
const states = require('../json/places/state.json');
const cities = require('../json/places/city.json');
const express = require('express');
const app = express();

exports.reqCities = async (req, res) => {
   let request = req.body.city.toLowerCase();
   var cityArr = [];
   const resultCities = cities.reduce((acc, value) => {
      let name = value.name.toLowerCase();
      if(name.includes(request) ){
         cityArr.push(value);
      }
      acc = cityArr;
      return acc;
   }, []);
   res.json(resultCities);
}

exports.reqStates = async (req, res) => {
   let request = req.body.state.toLowerCase();
   var stateArr = [];
   const resultStates = states.reduce((acc, value) => {
      let name = value.name.toLowerCase();
      if(name.includes(request) ){
         stateArr.push(value);
      }
      acc = stateArr;
      return acc;
   }, []);
   res.json(resultStates);
}

exports.reqCountries = async (req, res) => {
   let request = req.body.country.toLowerCase();
   var countryArr = [];
   const result = countries.reduce((acc, value) => {
      let name = value.name.toLowerCase();
      if(name.includes(request) ){
         countryArr.push(value);
      }
      acc = countryArr;
      return acc;
   }, []);
   res.json(result);
}

exports.reqCountryFromState = (req, res, next) => {  
   let request = req.body.state;
   const state = states.reduce((acc, value) => {
      let name = value.name.toLowerCase();
      if(name ===  request) acc = value;
      return acc;
   });
   
   if(state){
      let countryId = state.country_id;
      let country =  countries.reduce((acc, value) => {
         if(value.id === countryId) acc = value;
         return acc;
      });

      res.locals.autoCompleteCountry = country;
      return next();
   }
   else return;
}

exports.reqStateCountry = (req, res, next) => {

   

   let request = req.body.city.toLowerCase();
   const city = cities.reduce((acc, value) => {
      let name = value.name.toLowerCase();
      if(name ===  request ) acc = value;
      return acc;
   },);     // { id: '26983', name: 'Kuantan', state_id: '2315' }
   
   console.log(city);
   
   let state = states.reduce((acc, value) => {
      if(value.id ===  city.state_id ) acc = value;
      return acc;
   });      // { id: '2315', name: 'Pahang', country_id: '132' }

   console.log(state);

   let country = countries.reduce((acc, value) => {
      if(value.id ===  state.country_id ) acc = value;
      return acc; // { id: '132', sortname: 'MY', name: 'Malaysia', phonecode: '60' }
   });

   console.log(country);

   res.locals.autoCompleteStateCountry = { state: state.name, country: country.name, phonecode: country.phonecode };
   next();
}

exports.reqCountryFromPhonecode = (req, res, next) => {
   let phonecode = req.body.phoneCode;

   let country = countries.reduce((acc, value) => {
      if(value.phonecode ===  phonecode) acc = value;
      return acc; // { id: '132', sortname: 'MY', name: 'Malaysia', phonecode: '60' }
   });
   country.userId = req.body._id;
   res.locals.autoCompleteCountry = country;
   next();
}

