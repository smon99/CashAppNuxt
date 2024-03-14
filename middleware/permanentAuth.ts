import {getToken} from "~/services/tokenUtils";

export async function permanentAuth() {
    const token = getToken();

    try {
        if (!token) {
            throw new Error('No token found');
        }

        const response = await fetch('http://localhost:8000/api/check-token', {
            method: 'POST',
            headers: {
                'Authorization': token,
                'Content-Type': 'application/json'
            }
        });

        if (!response.ok) {
            throw new Error('Failed to fetch data');
        }

        const data = await response.json();
        console.log('Data:', data);
    } catch (error) {
        console.error('Failed to fetch data:', error);
    }
}
