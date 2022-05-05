const logoutHandler = async () => {
    //make request to api to logout
    const response = await fetch('/user/logout', {
        method: 'POST',
    })

    if(response.ok) {
        document.location.reload();
    }
    else {
        alert(response.statusText);
    }
    
}

document.getElementById('nav-logout-btn').addEventListener('click', logoutHandler);