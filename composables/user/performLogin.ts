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

        const response = await fetch('http://localhost:8000/api/login', requestOptions)

        const data = await response.json();

        const tokenCookie = useCookie('token', {
            maxAge: 3600,
            secure: true,
            sameSite: true,
        })
        tokenCookie.value = data.token
    };

    return {
        email,
        password,
        errorMessage,
        submitForm,
    };
}