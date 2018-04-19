/**
 * Documentation: https://gagnatorg.ja.is/docs/skra/v1/#get--v1-people-(kennitala) 
 * https://www.html5rocks.com/en/tutorials/cors/#toc-cors-from-jquery
 *
 * til að skoða stöðu leyfis: 
 * https://api.ja.is/usage/xt8jo23x2pzp91os6w06nw4rof6vdgccz9uymt0d
 * 
*/

const getThjodskraInfo = (kennitala)=>{
	const apiKey = "xt8jo23x2pzp91os6w06nw4rof6vdgccz9uymt0d";
	const apiURL = "https://api.ja.is/skra/v1/people/" + kennitala;
	const accessHeader = {
		credentials: 'include', // include, same-origin, *omit
		Headers: {
		  'Authorization': apiKey,
		  'Content-Type': 'application/json'
		},
		method: 'GET', // *GET, POST, PUT, DELETE, etc.
		mode: 'no-cors', // no-cors, cors, *same-origin
	};
	
	fetch( apiURL, accessHeader ).then((results)=>{
		return results
	}).then((data)=>{
		console.log("Þjóðskrá results: ", data);
	}).catch((error)=>{
		console.log("error while fetching from the Já.is API: ", error);
	});
};

