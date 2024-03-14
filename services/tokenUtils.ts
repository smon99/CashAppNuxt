import {useCookie} from 'nuxt/app';

export function getToken(): string | null | undefined {
    const tokenCookie = useCookie('token');
    return tokenCookie.value;
}
