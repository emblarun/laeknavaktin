const displayUserQuestion = (userName) => {
  document.getElementById("container").innerHTML=`
    <div class="header">
      <h1>${ user.name }</h1>
    </div>
    <div class="spurning">
      <p class="headerveldusjukling">Hver er að fara til læknis?</p>
    </div>
    <div class ="dropdownveldusjukling">
      <button class="btn btn-secondary dropdown-toggle" type="button" id="veldusjukling" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        Dropdown
      </button>
      <div class="dropdown-menu" aria-labelledby="dropdownMenu2">
      <button class="dropdown-item" type="button">${user.info}</button>
      </div>
    </div>

    <div class="location1">
      <div>${ map.location1 }</div>
        <div class= "locationmynd1">${image}</div>
    </div>

    <div class="location2">
      <div>${ map.location2 }</div>
      <div class= "locationmynd2">${image}</div>
    </div>
    `;
}
