import {getToken} from "~/services/tokenUtils";

interface Transaction {
    transactionID: number;
    value: number;
    userId: number;
    purpose: string;
    createdAt: {
        date: string;
        timezone_type: number;
        timezone: string;
    };
    paypalOrderId: string;
    paypalPayerId: string;
}

interface UserResponse {
    username: string;
    balance: number;
    transactions: Transaction[];
}

export async function getTransactions() {
    const token = getToken();

    try {
        const response = await fetch('http://localhost:8000/history', {
            method: 'POST',
            headers: {
                'Authorization': token,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({})
        });

        const data = await response.json() as UserResponse;

        const username = data.username;
        const balance = parseFloat(data.balance).toFixed(2);
        const transactions = data.transactions;

        // Accessing properties of each transaction
        transactions.forEach(transaction => {
            const transactionID: number = transaction.transactionID;
            const value: number = transaction.value;
            const userId: number = transaction.userId;
            const purpose: string = transaction.purpose;
            const createdAt: string = transaction.createdAt.date; // Or any other field you want from createdAt
            const paypalOrderId: string = transaction.paypalOrderId;
            const paypalPayerId: string = transaction.paypalPayerId;

            // Now you can do whatever you want with these values
        });

        return {username, balance, transactions};
    } catch (error) {
        console.error('Failed to fetch data:', error);
        throw error;
    }
}
