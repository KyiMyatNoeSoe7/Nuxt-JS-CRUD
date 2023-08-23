<template>
  <h1
    class="label"
  >
   {{ text }}
  </h1>
</template>

<script>
export default defineComponent({
   props: {
    text: {
        type: String,
        required: true,
    }
    }
})
</script>

<style scoped lang="scss">
.label {
    @apply
    text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white;
}
</style>