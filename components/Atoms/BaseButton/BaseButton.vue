<template>
  <button class="base-button">
    {{ text }}
  </button>
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
.base-button {
    @apply 
    bg-blue-500 text-white font-bold py-2 px-4 rounded;
    &:hover {
        @apply bg-blue-700;
    }
}
</style>
