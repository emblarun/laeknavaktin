const getAndDisplayProfile = ()=>{
    getProfileInfo().then((data)=>{
        displayProfilePage(data.userName, data.pictureURL, data.phoneNumber);
    })
}

document.getElementById("showProfile").addEventListener("click", ()=>{
    console.log("BOO!")
    getAndDisplayProfile();
});