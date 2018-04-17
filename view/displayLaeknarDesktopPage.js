//síðan sem læknarnir sjá í tölvunni hjá sér


const displayDoctorPage = () => {
    document.getElementById("container").innerHTML= `
    <div class="container">
  <div class="row">
    <div class="col-12">
      <h1>Næstu Sjúklingar</h1>
    </div>

    <!--Sjúklingur 1  -->
    <div class="col-12">
        <div class="panel panel-default">
        <!-- Default panel contents -->
        <button class="btn btn-default dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
          1. ${UserName}
          <span class="caret"></span>
        </button>
        <!-- Dropdown content / Ítarlegri upplýsingar um sjúkling -->
        <div class="panel-body p-0 dropdown-menu" aria-labelledby="dropdownMenu1">
          <table class="table">
            <tr>
              <td>Ofnæmi:</td>
              <td>Aldur:</td>
              <td>Annað:</td>
            </tr>
          </table>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. re eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          <button type="button" name="button">Kalla inn næsta sjúkling</button>
        </div>
      </div>
      <!--Panel/Table END  -->
    </div>
    <!--col END  -->
    <!--Sjúklingur 1 END  -->

    <!--Sjúklingur 2  -->
    <div class="col-12">
        <div class="panel panel-default">
        <!-- Default panel contents -->
        <button class="btn btn-default dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
          2. ${UserName}
          <span class="caret"></span>
        </button>
        <!-- Dropdown content / Ítarlegri upplýsingar um sjúkling -->
        <div class="panel-body p-0 dropdown-menu" aria-labelledby="dropdownMenu1">
          <table class="table">
            <tr>
              <td>Ofnæmi:</td>
              <td>Aldur:</td>
              <td>Annað:</td>
            </tr>
          </table>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. re eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          <button type="button" name="button">Kalla inn næsta sjúkling</button>
        </div>
      </div>
      <!--Panel/Table END  -->
    </div>
    <!--col END  -->
    <!--Sjúklingur 2 END  -->

    <!--Sjúklingur 3  -->
    <div class="col-12">
        <div class="panel panel-default">
        <!-- Default panel contents -->
        <button class="btn btn-default dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
          3. ${UserName}
          <span class="caret"></span>
        </button>
        <!-- Dropdown content / Ítarlegri upplýsingar um sjúkling -->
        <div class="panel-body p-0 dropdown-menu" aria-labelledby="dropdownMenu1">
          <table class="table">
            <tr>
              <td>Ofnæmi:</td>
              <td>Aldur:</td>
              <td>Annað:</td>
            </tr>
          </table>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. re eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          <button type="button" name="button">Kalla inn næsta sjúkling</button>
        </div>
      </div>
      <!--Panel/Table END  -->
    </div>
    <!--col END  -->
    <!--Sjúklingur 3 END  -->

    <!--Sjúklingur 4  -->
    <div class="col-12">
        <div class="panel panel-default">
        <!-- Default panel contents -->
        <button class="btn btn-default dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
          4. ${UserName}
          <span class="caret"></span>
        </button>
        <!-- Dropdown content / Ítarlegri upplýsingar um sjúkling -->
        <div class="panel-body p-0 dropdown-menu" aria-labelledby="dropdownMenu1">
          <table class="table">
            <tr>
              <td>Ofnæmi:</td>
              <td>Aldur:</td>
              <td>Annað:</td>
            </tr>
          </table>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. re eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          <button type="button" name="button">Kalla inn næsta sjúkling</button>
        </div>
      </div>
      <!--Panel/Table END  -->
    </div>
    <!--col END  -->
    <!--Sjúklingur 4 END  -->

    <!--Sjúklingur 5  -->
    <div class="col-12">
        <div class="panel panel-default">
        <!-- Default panel contents -->
        <button class="btn btn-default dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
          5. ${UserName}
          <span class="caret"></span>
        </button>
        <!-- Dropdown content / Ítarlegri upplýsingar um sjúkling -->
        <div class="panel-body p-0 dropdown-menu" aria-labelledby="dropdownMenu1">
          <table class="table">
            <tr>
              <td>Ofnæmi:</td>
              <td>Aldur:</td>
              <td>Annað:</td>
            </tr>
          </table>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. re eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          <button type="button" name="button">Kalla inn næsta sjúkling</button>
        </div>
      </div>
      <!--Panel/Table END  -->
    </div>
    <!--col END  -->
    <!--Sjúklingur 5 END  -->

  </div>
  <!--row END  -->



</div>
<!--container END  -->

    `
}
