<template>
  <div class="login">
    <div class="login-div">
      <div class="login-title">
        <form @submit.prevent="login">
          <AtomsTextLabel text="Sign in to your account" />
          <AtomsBaseInput
            :type="'text'"
            v-bind="email"
            :placeholder="'Enter email'"
          />
          <p class="error-message">{{ errors.email }}</p>
          <AtomsBaseInput
            :type="'password'"
            v-bind="password"
            :placeholder="'Enter password'"
          />
          <p class="error-message">{{ errors.password }}</p>
          <AtomsBaseButton text="Login" />
        </form>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useForm } from "vee-validate";

function required(value: any) {
  return value ? true : "This field is required";
}

const { defineInputBinds, handleSubmit, errors } = useForm({
  validationSchema: {
    email: required,
    password: required,
  },
});

const email = defineInputBinds("email");
const password = defineInputBinds("password");

const router = useRouter();
const isLogin = useCookie("auth");

const login = handleSubmit((values) => {
  const { email, password } = values;
  if (email === "admin@gmail.com" && password === "password") {
    isLogin.value = true;
    router.push("/");
  }
});
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
.error-message {
  @apply mt-2 text-sm text-green-600 dark:text-green-500;
}
</style>
