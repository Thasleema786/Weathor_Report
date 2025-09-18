function getWeather(){
let city=document.getElementById("city")
showWeather(city.value)
}
 async function showWeather(city){
    const url = `https://open-weather13.p.rapidapi.com/city?city=${city}&lang=EN`;
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '0e9a4b598cmshbcf845f5f11f597p14f421jsnf362cc268584',
		'x-rapidapi-host': 'open-weather13.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
    if(!response){
        throw new Error("Weather is not supported")
    }
	const result = await response.json();
	getdata(result)
} catch (error) {
	console.error(error);
}
   
 }
 function getdata(result){
    let item=document.getElementById("main")
	item.innerHTML=
	`<p>City:${result.name}</p>
	<p>Temperature:${result.main.temp}`
 }