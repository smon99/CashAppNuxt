import {ref} from 'vue';

export default function useAuthentication() {
    const email = ref('');
    const password = ref('');
    const errorMessage = ref('');

    const submitForm = async () => {
        const requestOptions = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                username: email.value,
                password: password.value,
            }),
        };

        try {
            const response = await fetch('http://localhost:8000/api/login', requestOptions);

            if (!response.ok) {
                const errorData = await response.json();
                new Error(errorData.message || 'Failed to login');
            }

            const data = await response.json();
            if (!data.token) {
                new Error('Token not found in response');
            }

        } catch (error) {
            errorMessage.value = 'An error occurred. Please try again.';
        }
    };

    return {
        email,
        password,
        errorMessage,
        submitForm,
    };
}