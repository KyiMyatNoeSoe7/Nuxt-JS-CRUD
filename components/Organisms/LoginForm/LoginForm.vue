<template>
  <div class="login">
    <div class="login-div">
      <div class="login-title">
        <AtomsTextLabel text="Sign in to your account" />
        <form class="login-form" action="#">
          <MoleculesInputButton />
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default defineComponent({
  props: {
    text: {
      type: String,
      // required: true,
    },
  },
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
</style>