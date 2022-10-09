export const WEATHER_API_URL = 'http://api.weatherapi.com/v1/forecast.json?key=0ba6f250e84d4767a0590004220610&q=';
export const CURRENT_LOCATION_API_URL = 'https://find-any-ip-address-or-domain-location-world-wide.p.rapidapi.com/iplocation?apikey=873dbe322aea47f89dcf729dcc8f60e8';


// return (
//     <>
//         {weatherData != null && weatherData.forecast.forecastday.map((item, index) =>
//             <div>
//                 <div key={index}>
//                     {/* temp_c={item.day.avgtemp_c} */}
//                     temp_f = {item.day.avgtemp_f}
//                     condition = {item.day.condition.text}
//                     <RiCelsiusFill />
//                     <RiFahrenheitFill />
//                 </div>
//                 {
//                     isSearchOpen ?
//                         <SearchBar />
//                         :
//                         <LeftSideBar
//                             getCurrentLocationWeather={getCurrentLocationWeather}
//                             temp={item.day.avgtemp_c}
//                             date={item.date}
//                         />
//                 }
//             </div>
//         )}
//     </>
// )