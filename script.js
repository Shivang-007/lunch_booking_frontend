



// document. getElementById("delete_request").style.display = "none";
// document. getElementById("arrive_lunch").style.display = "none";

function openGuest() {
    document.querySelector('.popup').style.display = "flex";
};

var e1 = document.querySelector(".close");

if(e1){
    e1.addEventListener("click", function () {
        document.getElementById('popup').style.display = "none";     
});
}



