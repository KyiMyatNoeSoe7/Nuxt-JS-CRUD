export default defineNuxtRouteMiddleware((to, from) => {

    const isLogin = useCookie('auth');

    if(!isLogin.value || isLogin.value === 'false'){
        console.log(isLogin.value);
        abortNavigation();
        return navigateTo('/login');
    }
});
