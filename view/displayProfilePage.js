//síða sem ég ætla að nota til þess að sýna dæmi

const displayProfilePage = (userName, pictureURl, phoneNumber) => {
    document.getElementById("container").innerHTML= `
    username: ${userName} <br>
    phoneNumber: ${phoneNumber} <br>
    pictureURL: <img src="${pictureURl}"> 
    `
}