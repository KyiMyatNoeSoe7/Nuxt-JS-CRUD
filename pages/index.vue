<template>
  <div>
    <h1 class="text-xl text-center font-bold">
      Hello Nuxt JS!
    </h1>
    <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.</p>
    <Counter />
    <div>
      x: {{ x }}
      y: {{ y }}
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  middleware: ["auth"]
})

  const { x, y } = useMouse();
</script>