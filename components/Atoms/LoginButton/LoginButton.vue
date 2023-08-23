<template>
    <div class="login-header">
        <nuxt-link to="/login" class="login-button">Login</nuxt-link>
    </div>
</template>

<style scoped lang="scss">
.login-header {
    @apply
    flex items-center lg:order-2;
}
.login-button {
    @apply 
    text-gray-800 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2;
    &:hover {
        @apply bg-gray-50;
    }
}
</style>