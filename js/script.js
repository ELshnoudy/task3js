var wibsiteNameInput= document.getElementById("bookmarkName")
var wibsiteURLInput= document.getElementById("bookmarkURL")


var websitesArr=[];
if (localStorage.getItem("website")!=null) {
    websitesArr = JSON.parse(localStorage.getItem("website")) 
    displayWibsites();
}

function addWibsite() {

    var Wibsite = {

        name : wibsiteNameInput.value ,
        URL : wibsiteURLInput.value,
    }

    websitesArr.push(Wibsite);
    localStorage.setItem("website",JSON.stringify(websitesArr))
    displayWibsites();
    reset();
}

function displayWibsites() {
    var cartoona = ""
    for (var i =0 ; i < websitesArr.length ;i++) {
        cartoona += `<tr>
        <td> ${i+1}</td> 
        <td>${websitesArr[i].name}</td> 
        <td><button class = " btn btn-Success" onclick=visitWebsite(${i})><i class="fa-solid fa-eye"></i> Vist </button></td>       
        <td><button class = " btn btn-danger" onclick=deleteWebsite(${i})><i class="fa-solid fa-trash-can"></i> Delete </button></td>       
        </tr>`
    }
    document.getElementById("tBody").innerHTML=cartoona ;
}

function visitWebsite(wibsiteIndex) {
    window.location.href= websitesArr[wibsiteIndex].URL
}

function reset() {
    wibsiteNameInput.value = "";
    wibsiteURLInput.value = "";
}

function deleteWebsite(wibsiteIndex) {
    websitesArr.splice(wibsiteIndex,1);
    localStorage.setItem("website",JSON.stringify(websitesArr))
    displayWibsites();
}