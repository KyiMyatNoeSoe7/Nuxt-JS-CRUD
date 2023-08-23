export default defineNuxtRouteMiddleware((to, from) => {
    console.log('From auth middleware')

    const isLogin = useCookie('auth');

    if (isLogin.value === 'true') {
        return navigateTo('/');
    }

    if(!isLogin.value || isLogin.value === 'false'){
        abortNavigation();
        return navigateTo('/login');
    }
});
