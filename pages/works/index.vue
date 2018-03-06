<template>
    <section class="container">
        <h1 class="title">
            Works
        </h1>
        <nuxt-link class="button" to="/">
            Top
        </nuxt-link>
    </section>
</template>

<script>
export default {
    head () {
        return {
            title: 'Works'
        }
    }
}
</script>

<style scoped>
.title{
    margin: 30px 0;
}
</style>
