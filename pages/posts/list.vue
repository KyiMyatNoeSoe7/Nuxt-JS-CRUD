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
              <tr v-if="posts.length == 0"><td class="text-center text-lg font-bold">There is no post.</td></tr>
              <tr
                class="border-b bg-neutral-100 dark:border-neutral-500 dark:bg-neutral-700"
                v-for="post in posts"
                :key="post.id"
              >
                <td class="whitespace-nowrap px-6 py-4">{{ post.id }}</td>
                <td class="whitespace-nowrap px-6 py-4">{{ post.title }}</td>
                <td class="px-6 py-4 break-all w-2/4">
                  {{ post.description }}
                </td>
                <td>
                  <a class="base-button">
                    <nuxt-link :to="`/posts/${post.id}`" class="nav">Edit</nuxt-link>
                  </a>
                  <button class="delete-button" @click="onToggle(post.id, true)">Delete</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div v-if="isOpen == true">
        <div
          class="absolute bg-black opacity-70 inset-0 z-0"
        ></div>
        <div
          class="w-full max-w-lg p-3 relative mx-auto my-auto rounded-xl shadow-lg bg-white"
        >
          <div>
            <div class="text-center p-3 flex-auto justify-center leading-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-16 h-16 flex items-center text-gray-500 mx-auto"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                  clip-rule="evenodd"
                />
              </svg>
              <h2 class="text-2xl font-bold py-4">Are you sure?</h2>
              <p class="text-md text-gray-500 px-8">
                Do you really want to delete?
              </p>
            </div>
            <div class="p-3 mt-2 text-center space-x-4 md:block">
              <button
                class="mb-2 md:mb-0 bg-red-500 px-5 py-2 text-sm shadow-sm font-medium tracking-wider border text-white rounded-md hover:shadow-lg hover:bg-red-700"
              @click.prevent="deletePost(id)">
                Delete
              </button>
              <button
                @click="onToggleClose"
                class="mb-2 md:mb-0 bg-gray-500 border border-gray-500 px-5 py-2 text-sm shadow-sm font-medium tracking-wider text-white rounded-md hover:shadow-lg hover:bg-gray-600"
              >
                Cancel
              </button>
            </div>
          </div>
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

const isOpen = ref();

function onToggle(id : any, data: boolean) {
  isOpen.value = data;
  id = id.value;
}

const deletePost = async (id: number) => {
  const { error } = await useFetch("/api/posts/" + id, {
    method: "DELETE",
  });
  if (!error.value) router.go(0);
};

function onToggleClose() {
  isOpen.value = !isOpen.value;
}
</script>

<style scoped lang="scss">
@import "@/assets/scss/variables.scss";
</style>
