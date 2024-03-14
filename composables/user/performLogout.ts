import {deleteToken} from "~/services/tokenUtils";
import {permanentAuth} from "~/middleware/permanentAuth";

export default async function performLogout() {
    try {
        await deleteToken();
        await permanentAuth();
    } catch (error) {
        console.error('Error during logout:', error);
    }
}
