<template>
  <div>
    <nav class="flex gap-4 p-4 bg-gray-100 fixed top-0 w-full z-10 shadow">
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
      <router-link to="/todos">Todos</router-link>
    </nav>
    <router-view />
  </div>
</template>
