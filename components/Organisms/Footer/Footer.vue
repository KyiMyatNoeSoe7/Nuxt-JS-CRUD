<template>
    <footer class="footer">
      <div class="footer-div">
        <span class="footer-text">© 2023 <a href="/">Nuxt Js </a>. All Rights Reserved.
        </span>
      </div>
    </footer>
</template>

<style scoped lang="scss">
.footer {
    @apply
    bg-gray-300 rounded-lg shadow dark:bg-gray-800;
}
.footer-div {
    @apply
    w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between;
}
.footer-text {
    @apply 
    text-sm text-gray-500 sm:text-center dark:text-gray-400;
}
</style>