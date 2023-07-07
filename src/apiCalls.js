//weather services
const API_key = '3448f48b958ddb737240a98bf3344fe'

const makeIconURL = (iconId) => `https://openweathermap.org/img/wn/${iconId}@2x.png`

const getWeatherData = async (city, units='metric') => {
	const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_key}&units=${units}`

	const data = await fetch(url)
		.then((response) => response.json())
		.then((data) => console.log(data))
		.catch((err) => console.error(err))

	const {
		weather, 
		main: { temp, feels_like, temp_min, temp_max, pressure, humidity }, 
		wind: { speed },
		sys: { country },
		name,
	} = data

	const { forecast, icon } = weather[0]

	return {
		forecast, 
		iconURL: makeIconURL(icon), 
		temp, 
		feels_like, 
		temp_min, 
		temp_max, 
		pressure, 
		humidity, 
		speed, 
		country, 
		name
	}
}


// export const geoApiOptions = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': 'd7635eff76msha229d0bb071e0bdp13e939jsn65edae4c49b7',
// 		'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com'
// 	}
// };

// export const GEO_API_URL = 'https://wft-geo-db.p.rapidapi.com/v1/geo'

// export const WEATHER_API_URL = 'https://api.openweathermap.org/data/2.5'

// export const WEATHER_API_KEY = '23448f48b958ddb737240a98bf3344fe'