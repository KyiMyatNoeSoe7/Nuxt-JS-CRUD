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

definePageMeta({
  middleware:["login"]
})

// definePageMeta({
//   middleware: [""]
// });

function passwordValid(value: any) {
  if(!value){
    return "The password field is required";
  }else if(value.length < 6){
    return "Password must be at least 6 characters";
  }else {
    return true;
  }
}

function emailVaild(value : any) {
  let regex = new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}');
  if(!value) {
    return "The email field is requied";
  }else if (!regex.test(value)) {
    return "The email format is invalid";
  }else {
    return true;
  }
}

const { defineInputBinds, handleSubmit, errors } = useForm({
  validationSchema: {
    email: emailVaild,
    password: passwordValid,
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
@import "@/assets/scss/variables.scss";
</style>
