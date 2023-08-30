export default defineNuxtRouteMiddleware((to, from) => {

    const isLogin = useCookie('auth');
    console.log(isLogin.value);
    if (isLogin.value === 'true') {
        abortNavigation();
        return navigateTo('/about');
    }
});
