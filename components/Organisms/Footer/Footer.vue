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
    bg-slate-50 rounded-lg shadow;
}
.footer-div {
    @apply
    w-full mx-auto max-w-screen-xl p-4;
}
.footer-text {
    @apply 
    text-sm text-gray-500 text-center;
}
</style>