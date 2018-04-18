const displayUserQuestion = ()=> {
	/*
	*  Dropdown gæti verið skapað með forEach á array lista af þeim sem er í umsjá viðkomandi
	* 
	*  fann codepen með uppástungum um css til að stýla select dropdowns: 
	*  https://codepen.io/ericrasch/pen/zjDBx
	*  setti upprunalega uppsetningu neðst ef þið viljið breyta til baka
	*/
	const userName = "Einar Áskell";
	const lat = "";
	const lng = "";
  document.getElementById("container").innerHTML=`
    <div class="header">
      <h1>${ userName }</h1>
    </div>
	<form class="spurningar">
		<label class="headerveldusjukling">
			Hver er að fara til læknis?<br> 	
			<select class="dropdownveldusjukling">
				<option value="kennitala">Ég sjálf/ur</option>
			</select>
		</label>
	</form>

    <div class="location1" id="showHeilsugaeslur">
      <div>${lat}</div>
    </div>

    <div class="location2">
      <div>${lng}</div>
    </div>
    `;
}
/*
Upprunaleg uppsetning

    <div class="header">
      <h1>${ userName }</h1>
    </div>
	<form>
		<div class="spurning">
		  <p class="headerveldusjukling">Hver er að fara til læknis?</p>
		</div>
		<div class ="dropdownveldusjukling">
		  <button class="btn btn-secondary dropdown-toggle" type="button" id="veldusjukling" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
			Dropdown
		  </button>
		  <div class="dropdown-menu" aria-labelledby="dropdownMenu2">
		  <button class="dropdown-item" type="button">${userName}</button>
		  </div>
		</div>
	</form>

    <div class="location1" id="showHeilsugaeslur">
      <div>${lat}</div>
    </div>

    <div class="location2">
      <div>${lng}</div>
    </div>

*/
