<template>
    <label for="username-success" class="title-label">{{ text }}</label>
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
.titel-label {
    @apply
    block mb-2 text-sm font-medium text-green-700 dark:text-green-500;
}
</style>