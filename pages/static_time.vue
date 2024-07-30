<template>
  <div>
    <h1>static_time</h1>
    <h2>{{ ipdData.query }}</h2>
    <h2>now: {{ new Date().toLocaleString() }}</h2>
    <h2>build: {{ bulidTime }}</h2>
  </div>
</template>
<script setup>
const { data: now } = await useFetch('/api/now');
const { data: ipdData } = await useFetch('/api/ip');
const bulidTime = new Date(now.value.timestamp).toLocaleString();
console.log(ipdData);
</script>
