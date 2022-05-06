const postFormHandler = async () => {
    //collect data from post form
    const textContent = document.querySelector('#new-post-content').value.trim();

    //bababooey go ahead and send that shit
    if(textContent) {
        const response = await fetch('/post/', {
            method: 'POST',
            body: JSON.stringify({textContent}),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            document.location.reload();
        }
        else {
            document.location.reload();
            alert(response.statusText);
        }
    }
}

document.getElementById('publish-btn').addEventListener('click', postFormHandler);