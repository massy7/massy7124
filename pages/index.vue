<template>
    <section class="container wrapper">
        <h1 class="title">
            Massy7124's Portfolio
        </h1>
        <h2>
            Full-stack Web Engineer
        </h2>
        <nuxt-link class="button" to="/blog">Blog</nuxt-link>
        <nuxt-link class="button" to="/works">Works</nuxt-link>
        <nuxt-link class="button" to="/history">History</nuxt-link>
        <nuxt-link class="button" to="/contact">Contact</nuxt-link>

        <a id="profile"></a>
        <div class="section">
            <h1>Profile</h1>
        </div>

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
            title: 'Massy\'s Home'
        }
    }
}
</script>

<style scoped>
.title{
    margin: 30px 0;
}
</style>
