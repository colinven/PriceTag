const testForm = {
    firstName: "Colin",
    lastName: "Venancio",
    phone: "9806216344",
    email: "colin@email.com",
    street: "20005 Metaphor Mews",
    city: "Davidson",
    state: "NC",
    zip: "28036",
    lastWash: "Not sure",
}


export default async function fetchQuote(formData) {

    const addressString = `${formData.street}, ${formData.city}, ${formData.state} ${formData.zip}`;

    const postData = {
        address: addressString
    }

    try {
        const response = await fetch("http://localhost:3000/property", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(postData)
        });

        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }

        const data = await response.json();
        console.log(data);
    } catch (e) {
        console.error(e.message);
    }

}
fetchQuote(testForm);