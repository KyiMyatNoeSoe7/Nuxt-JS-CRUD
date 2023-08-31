export default defineNuxtRouteMiddleware((to, from) => {

    const isLogin = useCookie('auth');

    if(!isLogin.value || isLogin.value === 'false'){
        abortNavigation();
        return navigateTo('/login');
    }
});
