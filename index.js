function submitData(name, email) {
    return fetch('http://localhost:3000/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({
            name: name,
            email: email
        })
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        // Append the new id to the DOM
        const idElement = document.createElement('div');
        idElement.textContent = `New ID: ${data.id}`;
        document.body.appendChild(idElement);
    })
    .catch(error => {
        // Handle the error and append the message to the DOM
        const errorElement = document.createElement('div');
        errorElement.textContent = `Error: ${error.message}`;
        document.body.appendChild(errorElement);
    });
}

submitData('Fahma', 'fahmo.abdisalan@student.moringaschool.com');
