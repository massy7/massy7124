<template>
    <section class="container">
        <h1 class="title">
            Blog
        </h1>

        <ul class="users">
            <li v-for="(blog, index) in blogs" :key="index" class="blog">
                <nuxt-link :to="{ name: 'id', params: { id: index }}">
                    {{ blog.name }}
                </nuxt-link>
            </li>
        </ul>

        <nuxt-link class="button" to="/">
            Top
        </nuxt-link>
    </section>
</template>

<script>
import axios from '~/plugins/axios'

export default {
    async asyncData () {
        let { data } = await axios.get('/api/blog')
        return { blogs: data }
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
.user{
    margin: 10px 0;
}
</style>
