const displayUserQuestion = ()=> {
  document.getElementById("container").innerHTML=`
    <div class="header">
      <h1>${ userName }</h1>
    </div>
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

    <div class="location1" id="showHeilsugaeslur">
      <div>${lat}</div>
    </div>

    <div class="location2">
      <div>${ lng}</div>
    </div>

    `;
}
