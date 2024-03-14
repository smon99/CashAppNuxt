import {permanentAuth} from "~/middleware/permanentAuth";
import {getToken} from "~/services/tokenUtils";

export async function getStats() {
    const token = getToken();

    try {
        const response = await fetch('http://localhost:8000/', {
            method: 'POST',
            headers: {
                'Authorization': token,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({})
        });

        const data = await response.json();

        const username = data.username;
        const balance = data.balance;

        return {username, balance};
    } catch (error) {
        console.error('Failed to fetch data:', error);
        throw error;
    }
}
