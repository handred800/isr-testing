<template>
  <div>
    <h1>static</h1>
    <h2>build: {{ new Date().toLocaleString() }}</h2>
    <h2>{{ time }}</h2>
  </div>
</template>
<script setup>
const time = await $fetch("/api/now").then((res) => {
  console.log(res.timestamp);
  return new Date(res.timestamp).toLocaleString();
});
</script>
