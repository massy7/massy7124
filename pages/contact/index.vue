<template>
    <section class="container">
        <h1 class="title">
            Contact
        </h1>

        <nuxt-link class="button" to="/">Top</nuxt-link>
    </section>
</template>

<script>
export default {
    transition (to, from) {
        if (!from) return 'slide-left'
        return +to.query.page < +from.query.page ? 'slide-right' : 'slide-left'
    },
    head () {
        return {
            title: 'Contact'
        }
    }
}
</script>

<style scoped>
.title{
    margin: 30px 0;
}
</style>
