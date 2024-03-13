import {useState} from "nuxt/app";

export default async function getStats() {

    const username = useState();
    const balance = '';

    const requestOptions = {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            username: username,
            balance: balance,
        }),
    };

    try {
        const response = await fetch('http://localhost:8000', requestOptions);
    } catch (error) {

    }
}
