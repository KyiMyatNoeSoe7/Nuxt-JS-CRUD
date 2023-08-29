<template>
    <input
        :type="type"
        :placeholder="placeholder"
        class="base-text-field"
        required
    />
</template>

<script>
export default defineComponent({
   props: {
    placeholder: {
      type: String,
      required: true,
    }
  },
  data() {
    return {
      value: '',
    }
  }
})
</script>


<style scoped lang="scss">
.base-text-field {
  @apply bg-gray-50 border border-gray-300 
    mt-5
    text-gray-900 
    rounded-lg
    block w-full p-2.5;
}
</style>
