<template>
  <textarea
    rows="4"
    class="textarea-desp"
    :placeholder="placeholder"
  ></textarea>
</template>

<script>
export default defineComponent({
  props: {
    placeholder: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      value: "",
    };
  },
});
</script>


<style scoped lang="scss">
.textarea-desp {
  @apply block p-2.5 w-1/2 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500;
}
</style>
