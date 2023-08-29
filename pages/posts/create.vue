<template>
  <div class="container mx-80">
    <AtomsTextLabel text="Create Post" />
    <form @submit.prevent="create">
      <div class="my-6">
        <AtomsInputLabel text="Code Number" />
        <AtomsInputText :type="'number'" v-bind="id" :name="'id'" :placeholder="'Enter code number'" />
        <p class="error-message">{{ errors.id }}</p>
      </div>
      <div class="mb-6">
        <AtomsInputLabel text="Title" />
        <AtomsInputText :type="'text'" v-bind="title" :name="'title'" :placeholder="'Enter title'" />
        <p class="error-message">{{ errors.title }}</p>
      </div>
      <div class="mb-6">
        <AtomsInputLabel text="Description" />
        <AtomsTextarea v-bind="description" :placeholder="'Enter description...'" />
        <p class="error-message">{{ errors.description }}</p>
      </div>
      <AtomsBaseButton text="Save" />
    </form>
  </div>
</template>

<script lang="ts" setup>
import { useForm } from "vee-validate";

definePageMeta({
  middleware: ["auth"],
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
.error-message {
  @apply mt-2 text-sm text-green-600 dark:text-green-500;
}
</style>