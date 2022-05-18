
function openGuest() {
    document.querySelector('.popup').style.display = "flex";
};

var e1 = document.querySelector(".close");

if (e1) {
    e1.addEventListener("click", function () {
        document.getElementById('popup').style.display = "none";
    });
}

function logout() {

    var mail = sessionStorage.getItem("mail");
    url = 'http://localhost:8000/api/signout';
    data = { "mail": mail };

    params = {
        method: 'post',
        headers: {
            'Content-type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        },
        body: JSON.stringify(data)
    };

    fetch(url, params).then(function (response) {
        if (response.status == 200) {
            sessionStorage.removeItem("mail");
            sessionStorage.removeItem("name");
            window.location.href = "http://localhost:5500/login.html";
            alert('You are Successfully Logout');

        }
        else if (response.status == 404) {
            alert('Something went wrong');

        }
        else {
            alert('Delete Request Successfully');
            return response.json();
        }
    });


}



function offDay() {

    var mail = sessionStorage.getItem("mail");
    url = 'http://127.0.0.1:8000/api/off-day';
    data = { "mail": mail };
    params = {
        method: 'post',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(data)
    };
    fetch(url, params)
        .then((response) => {
            return response.json();
        }).then((data) => {
            date = data.map(obj => {
                return {
                    title: 'off-day',
                    start: obj.weekend,
                }
            });
            weekend(date);
        })
}









