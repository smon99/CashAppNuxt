import {ref} from 'vue';

export default function performLogin() {
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
            const response = await fetch('http://localhost:8000/api/login', requestOptions)
        } catch (error) {
            errorMessage.value = 'same shit different project';
        }
    };

    return {
        email,
        password,
        errorMessage,
        submitForm,
    };
}