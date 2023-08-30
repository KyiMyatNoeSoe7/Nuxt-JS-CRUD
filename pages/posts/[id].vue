<template>
<div class="container mx-80">
    <AtomsTextLabel text="Update Post" />
    <form @submit.prevent="update">
        <div class="my-6">
          <AtomsInputLabel text="Title" />
          <input type="text" class="input-title" v-model="title" placeholder="Enter title" />
          <p class="error-message">{{ errors.title }}</p>
        </div>
        <div class="mb-6">
          <AtomsInputLabel text="Description" />
          <textarea rows="4" class="textarea-desp" v-model="description" placeholder="Enter description..."></textarea>
          <p class="error-message">{{ errors.description }}</p>
        </div>
        <AtomsBaseButton text="Save" />
    </form>
</div>
</template>

<script lang="ts" setup>
import { useForm } from 'vee-validate';

definePageMeta({
  middleware: ["auth"]
});

function required(value : any) {
  return value ? true : 'This field is required';
}

const route = useRoute();
const router = useRouter();
const id = route.params.id;

const { useFieldModel, handleSubmit, errors } = useForm({
  validationSchema: {
    title: required,
    description: required,
  },
});

const title = useFieldModel("title");
const description = useFieldModel("description");

const { data }: any = await useFetch("/api/posts/" + id);

if (!data.value) {
  throw createError({ statusCode: 404, statusMessage: 'Page Not Found' })
}

title.value = data.value.title;
description.value = data.value.description;

const update = handleSubmit((values) => {
  const { title, description } = values;
  const { error } = useFetch("/api/posts/" + id, {
    method: "PUT",
    body: {
      title,
      description,
    },
  });
  router.push({ path: "/posts/list" });
});

</script>

<style scoped lang="scss">
@import "@/assets/scss/variables.scss";
</style>