<template>
  <div>
    <title>Nuxt 3 Sample</title>
    <h3>
        Nuxt 3 Project
    </h3>
    <nav>
        <ul>
            <li><NuxtLink to="/">Home</NuxtLink></li>
            <li><NuxtLink to="/about">About</NuxtLink></li>
            <li><NuxtLink to="/contact">Contact</NuxtLink></li>
        </ul>
    </nav>
    <slot />
  </div>
</template>