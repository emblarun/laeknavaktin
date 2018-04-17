//birta að þú sért næstur í röðinni ásamt lækni og stofu númeri
const displayNextInLine = (doctorsName, doctorsRoom) => {
    document.getElementById("container").innerHTML= `
    <p> Röðin er komin að þér</p> 
    <p>${doctorsName} er á stofu ${doctorsRoom}</p>
    `
};