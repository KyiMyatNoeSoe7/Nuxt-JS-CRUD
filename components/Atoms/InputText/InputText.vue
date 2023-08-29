<template>
  <input :type="type" :name="name" class="input-title" :placeholder="placeholder" />
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
.input-title {
  @apply bg-gray-50 border border-gray-300 text-gray-900 placeholder-gray-400 text-sm rounded-lg  block w-1/2 p-2.5 dark:bg-green-100 dark:border-green-400;
}
</style>
