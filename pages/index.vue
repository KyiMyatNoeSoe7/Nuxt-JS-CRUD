<template>
  <div>
    <h1 class="text-3xl font-bold underline">
      Hello world!
    </h1>
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