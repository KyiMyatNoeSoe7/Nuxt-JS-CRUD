<template>
  <div>
    <!-- <OrganismsNavigation /> -->
    <header class="nav-header">
    <nav class="nav-container">
      <div class="nav-head">
        <AtomsHeadTitle />
        <!-- <AtomsLoginButton /> -->
        <div class="nav-div">
          <ul class="nav-base">
            <li>
              <nuxt-link to="/" class="nav" aria-current="page">Home</nuxt-link>
            </li>
            <li>
              <nuxt-link to="/about" class="nav">About</nuxt-link>
            </li>
            <li>
              <nuxt-link to="/contact" class="nav">Contact</nuxt-link>
            </li>
            <li>
              <nuxt-link to="/posts/list" class="nav">Posts</nuxt-link>
            </li>
            <li>
              <nuxt-link v-if="!isLogin" to="/login" class="nav">Login</nuxt-link>
            </li>
            <li>
              <button><nuxt-link v-if="isLogin == true" @click="logout" class="nav">Logout</nuxt-link></button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
    <div class="m-4">
      <slot />
    </div>
    <OrganismsFooter />
  </div>
</template>

<script setup lang="ts">
const router = useRouter();
const isLogin = useCookie('auth');
function logout() {
      isLogin.value = false;
      router.push('/login');
};
</script>


<style scoped lang="scss">
.nav-header {
  @apply bg-white rounded-lg shadow dark:bg-gray-800;
}
.nav-container {
  @apply bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800;
}
.nav-head {
  @apply flex flex-wrap justify-between items-center mx-auto max-w-screen-xl;
}
.nav-div {
  @apply hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1;
}
.nav-base {
  @apply flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0;
}
.nav {
  @apply block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100;
  &:hover {
    @apply bg-gray-50 bg-transparent;
  }
}
</style>
