export default defineEventHandler(async() => {
    const res = await $fetch('http://ip-api.com/json/');
    return res;
})