<template>
    <section class="container wrapper">
        <h1 class="title">
            Massy7124's Portfolio
        </h1>
        <h2>
            Full-stack Web Engineer
        </h2>
        <nuxt-link class="button" to="/blog">Blog</nuxt-link>
        <nuxt-link class="button" to="/blog">Blog</nuxt-link>
        <nuxt-link class="button" to="/history">History</nuxt-link>
        <nuxt-link class="button" to="/contact">Contact</nuxt-link>

        <a id="profile"></a>
        <div class="section">
            <h1>Profile</h1>
        </div>

    </section>
</template>

<script>
import axios from '~/plugins/axios'

export default {
    async asyncData () {
        let { data } = await axios.get('/api/blog')
        return { blog: data }
    },
    head () {
        return {
            title: 'Blogs'
        }
    }
}
</script>

<style scoped>
.title{
    margin: 30px 0;
}
.blog{
    list-style: none;
    margin: 0;
    padding: 0;
}

</style>
