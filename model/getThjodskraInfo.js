/*
 * https://gagnatorg.ja.is/docs/skra/v1/#get--v1-people-(kennitala) 
*/

const getThjodskraInfo = (kennitala)=>{
	const apiKey = "xt8jo23x2pzp91os6w06nw4rof6vdgccz9uymt0d";
	
	fetch("https://api.ja.is/skra/v1/people/" + kennitala, {
		headers: new Headers({
			method: 'get',
			'Authorization' : apiKey,	
		})
	}).then((json)=>{
		
	console.log("Þjóðskrá: ", json);
	}).catch((error)=>{
		console.log("error while fetching from the Já.is API: ", error);
	});

};

