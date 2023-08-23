<template>
  <div class="login">
    <div class="login-div">
      <div class="login-title">
        <form @submit.prevent="login">
          <AtomsTextLabel text="Sign in to your account" />
          <input
          type="text"
          placeholder="Enter email"
          v-model="user.email"
          class="base-text-field"
          required=""
        />
        <input
          type="password"
          placeholder="Enter password"
          v-model="user.password"
          class="base-text-field"
          required=""
        />
        <button class="base-button" type="submit">Login</button>
      </form>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const user = ref({
  email: '',
  password: '',
});
const router = useRouter();
const isLogin = useCookie('auth');

function login() {
  if(user.value.email === 'admin@gmail.com' && user.value.password === 'password'){
    isLogin.value = true;
    router.push('/')
  }
};

</script> 

<style scoped lang="scss">
.login {
  @apply flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0;
}
.login-div {
  @apply w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700 text-center;
}
.login-title {
  @apply p-6 space-y-4 md:space-y-6 sm:p-8;
}
.login-form {
  @apply space-y-4 md:space-y-6;
}
.base-button {
  @apply bg-blue-500 text-white font-bold py-2 px-4 rounded mt-5;
  &:hover {
    @apply bg-blue-700;
  }
}
.base-text-field {
  @apply bg-gray-50 border border-gray-300 
    mt-5
    text-gray-900 
    rounded-lg
    block w-full p-2.5;
}
</style>
