<template>
    <section class="container">
        <!-- <img src="../assets/img/logo.png" alt="Nuxt.js Logo" class="logo" /> -->
        <h1 v-if="error.statusCode === 404">ページが見つかりません</h1>
        <h1 class="title">
            {{ error.statusCode }}
        </h1>
        <h2 class="info">
            ページがありませんでした...
        </h2>
    </section>
</template>

<script>
export default {
    props: ['error']
}
</script>

<style scoped>
.title {
  margin-top: 15px;
  font-size: 5em;
}
.info {
  font-weight: 300;
  color: #9aabb1;
  margin: 0;
}
.button {
  margin-top: 50px;
}
</style>
