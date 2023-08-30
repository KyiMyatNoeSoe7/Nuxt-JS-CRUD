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
    w-full bg-slate-50 rounded-lg fixed bottom-0 shadow ;
}
.footer-div {
    @apply
    w-full mx-auto p-4;
}
.footer-text {
    @apply 
    text-sm text-gray-500 text-center;
}
</style>