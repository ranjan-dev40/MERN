const axios = require('axios');






async function getCoordsForAddress(address) {

    const options = {
        method: 'GET',
        url: 'https://trueway-geocoding.p.rapidapi.com/Geocode',
        params: {
          address: address,
          language: 'en'
        },
        headers: {
          'X-RapidAPI-Key': '4bd76ffb08msh3f8360361ee892cp1c4e2djsn820dc2b4b124',
          'X-RapidAPI-Host': 'trueway-geocoding.p.rapidapi.com',
        }
      };

      try {
        const response = await axios.request(options);
        const location = response.data.results[0].location;
        return location;


    } catch (error) {
        console.error(error);
    }

  


    // return {
    //     lat:40.74884537,
    //     lng:-73.97918245
    // };
  
}

module.exports = getCoordsForAddress;