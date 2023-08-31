export default defineNuxtRouteMiddleware((to, from) => {

    const isLogin = useCookie('auth');

    if (isLogin.value && to.name == 'login') {
        abortNavigation();
        return navigateTo('/about');
    }
});
