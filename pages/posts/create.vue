<template>
<div class="container">
    <AtomsTextLabel text="Create Post" />
    <form @submit.prevent="create" >
      <div class="mb-6">
      <label for="username-success" class="title-label">ID</label>
      <input type="number" v-bind="id" class="input-title" name="id" placeholder="Enter ID number" />
      <p class="error-message">{{ errors.id }}</p>
      </div>
      <div class="mb-6">
      <label for="username-success" class="title-label">Title</label>
      <input type="text" v-bind="title" class="input-title" placeholder="Enter title" />
      <p class="error-message">{{ errors.title }}</p>
      </div>
      <div class="mb-6">
      <label for="message" class="description-label">Description</label>
      <textarea rows="4" v-bind="description" class="textarea-desp" placeholder="Enter description..."></textarea>
      <p class="error-message">{{ errors.description }}</p>
      </div>
      <button class="base-button" type="submit">Save</button>
    </form>
</div>
</template>

<script lang="ts" setup>
import { useForm } from 'vee-validate';

definePageMeta({
  middleware: ["auth"]
});

function required(value: any) {
  return value ? true : "This field is required";
}

const { defineInputBinds, handleSubmit, errors } = useForm({
  validationSchema: {
    id: required,
    title: required,
    description: required,
  },
});

const id = defineInputBinds("id");
const title = defineInputBinds("title");
const description = defineInputBinds("description");

const router = useRouter();

const create = handleSubmit((values) => {
  const { id, title, description } = values;
  useFetch("/api/posts/store", {
    method: "post",
    body: { id, title, description },
  });
  router.push("/posts/list");
});

</script>

<style scoped lang="scss">
.container {
    @apply
    mx-80;
}
.titel-label {
    @apply
    block mb-2 text-sm font-medium text-green-700 dark:text-green-500;
}
.input-title {
    @apply 
    bg-gray-50 border border-gray-300 text-gray-900 placeholder-gray-400 text-sm rounded-lg  block w-1/2 p-2.5 dark:bg-green-100 dark:border-green-400;
}
.error-message {
    @apply 
    mt-2 text-sm text-green-600 dark:text-green-500;
}
.description-label {
    @apply 
    block mb-2 text-sm font-medium text-gray-900 dark:text-white;
}
.textarea-desp {
    @apply 
    block p-2.5 w-1/2 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500;
}
.base-button {
  @apply bg-blue-500 text-white font-bold py-2 px-4 rounded mt-5;
  &:hover {
    @apply bg-blue-700;
  }
}
</style>