import {getToken} from "~/services/tokenUtils";
import {ref} from 'vue';

export async function performDeposit() {
    const token = getToken();
    const amount = ref('');

    const submitDeposit = async () => {
        const requestOptions = {
            method: 'POST',
            headers: {
                'Authorization': token,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                amount: amount.value
            }),
        }

        const response = await fetch('http://localhost:8000/deposit/submit', requestOptions)

        const error = response.error;
        const success = response.success;

        return {error, success}
    }
}