<template>
  <div class="container mx-80">
    <AtomsTextLabel text="Create Post" />
    <form @submit.prevent="create">
      <div class="mb-6">
        <AtomsInputLabel text="Title" />
        <AtomsInputText :type="'text'" v-bind="title" :placeholder="'Enter title'" />
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
  const regex = new RegExp(/^\s+$/g);
  return value && !regex.test(value) ? true : 'The field is required';
}

const { defineInputBinds, handleSubmit, errors } = useForm({
  validationSchema: {
    title: required,
    description: required,
  },
});

const title = defineInputBinds("title");
const description = defineInputBinds("description");

const router = useRouter();

const { data } = await useFetch("/api/posts/lists");

const dataId = ref();
dataId.value = data.value ? data.value.length + 1 : 1 ;

const create = handleSubmit((values) => {
  const { title, description } = values;
  const trimmedTitle = title.trim();
  const trimmedDescription = description.trim();

  useFetch("/api/posts/store", {
    method: "post",
    body: { id: dataId, title: trimmedTitle, description: trimmedDescription},
  });
  router.push("/posts/list");
});
</script>

<style scoped lang="scss">
@import "@/assets/scss/variables.scss";
</style>