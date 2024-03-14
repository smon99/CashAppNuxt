import {useCookie} from 'nuxt/app';

export function getToken(): string | null | undefined {
    const tokenCookie = useCookie('token');
    return tokenCookie.value;
}

export function deleteToken() {
    const tokenCookie = useCookie('token');
    tokenCookie.value = null;
}
