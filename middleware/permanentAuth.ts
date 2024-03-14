import {getToken} from "~/services/tokenUtils";
import {reloadNuxtApp} from "nuxt/app";
import {ref} from 'vue';

export async function permanentAuth() {
    const token = getToken();
    let valid = ref('');

    try {
        const response = await fetch('http://localhost:8000/api/check-token', {
            method: 'POST',
            headers: {
                'Authorization': token,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({}),
        });

        if (!token) {
            reloadNuxtApp(
                {
                    path: '/login'
                }
            )
        } else {
            reloadNuxtApp(
                {
                    path: '/'
                }
            )
        }

        const data = await response.json();
    } catch (error) {
        console.error('Failed to fetch data:', error);
    }
}
