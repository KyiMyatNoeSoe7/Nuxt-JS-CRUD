<template>
<div class="container">
    <AtomsTextLabel text="Update Post" />
    <form @submit.prevent="update">
        <div class="mb-6">
        <label for="username-success" class="title-label">Title</label>
        <input type="text" class="input-title" v-model="post.title" placeholder="Enter title" />
        <p class="error-message">{{ errors.title }}</p>
        </div>
        <div class="mb-6">
        <label for="message" class="description-label">Description</label>
        <textarea rows="4" class="textarea-desp" v-model="post.description" placeholder="Enter description..."></textarea>
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

function required(value : any) {
  return value ? true : 'This field is required';
}

const route = useRoute();
const router = useRouter();
const id = route.params.id;
const { data }: any = await useFetch("/api/posts/" + id);

const post = ref(data);

const { useFieldModel, handleSubmit, errors } = useForm({
  validationSchema: {
    title: required,
    description: required
  },
});

const title = useFieldModel(post.title);
const description = useFieldModel(post.description);

// const title = defineInputBinds('title');
// const description = defineInputBinds('description');

const update = handleSubmit(values => {
  console.log(values);
  const { error } = useFetch("/api/posts/" + id, {
    method: "PUT",
    body: {
      title: data.value.title,
      description: data.value.description,
    },
  });
  router.push({ path: "/posts/list" });
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