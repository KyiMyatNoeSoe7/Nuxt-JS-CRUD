<template>
  <div class="flex flex-col">
    <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
      <div class="inline-block min-w-full py-2 sm:px-6 lg:px-8">
        <button class="base-button">
          <nuxt-link to="/posts/create" class="nav">Create</nuxt-link>
        </button>
        <div class="overflow-hidden">
          <table class="min-w-full text-left text-sm font-light">
            <thead
              class="border-b bg-white font-medium dark:border-neutral-500 dark:bg-neutral-600"
            >
              <tr>
                <th scope="col" class="px-6 py-4">Id</th>
                <th scope="col" class="px-6 py-4">Title</th>
                <th scope="col" class="px-6 py-4">Description</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr
                class="border-b bg-neutral-100 dark:border-neutral-500 dark:bg-neutral-700"
                v-for="post in posts"
                :key="post.id"
              >
                <td class="whitespace-nowrap px-6 py-4">{{ post.id }}</td>
                <td class="whitespace-nowrap px-6 py-4">{{ post.title }}</td>
                <td class="whitespace-nowrap px-6 py-4 break-words">
                  {{ post.description }}
                </td>
                <td>
                  <a class="base-button">
                    <nuxt-link :to="`/posts/${post.id}`" class="nav">Edit</nuxt-link>
                  </a>
                  <button class="delete-button" @click.prevent="deletePost(post.id)">Delete</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
definePageMeta({
  middleware: ["auth"],
});
const posts = ref();

const router = useRouter();

const { data } = await useFetch("/api/posts/lists");
posts.value = data.value;

const deletePost = async (id: number) => {
  const { error } = await useFetch("/api/posts/" + id, {
    method: "DELETE",
  });
  if (!error.value) router.go(0);
};
</script>

<style scoped lang="scss">
.base-button {
  @apply bg-blue-500 text-white font-bold py-2 px-4 rounded ;
  &:hover {
    @apply bg-blue-700;
  }
}
.delete-button {
  @apply bg-red-500 text-white font-bold py-2 px-4 rounded ml-2 ;
  &:hover {
    @apply bg-red-700;
  }
}
</style>