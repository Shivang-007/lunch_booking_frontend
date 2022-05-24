function logout() {

    var user_id = sessionStorage.getItem("user_id");
    url = 'http://localhost:8000/api/signout';
    data = { "user_id": user_id };

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
            sessionStorage.removeItem("user_id");
            sessionStorage.removeItem("name");
            window.location.href = "http://localhost/lunch_booking_system/login.html";
            alert('You are Successfully Logout');

        }
        else  {
            alert('Something went wrong');

        }       
    });
}

function offDay() {

    var user_id = sessionStorage.getItem("user_id");
    var token = sessionStorage.getItem("token");

    url = 'http://127.0.0.1:8000/api/off-day';
    data = { "user_id": user_id,"token":token };
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