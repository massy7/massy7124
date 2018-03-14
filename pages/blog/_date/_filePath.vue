<template>
    <section class="container">
        <div class="wrapper">
            <img :src="'/img/' + blog.imagePath">
            <h1 class="title">
                {{ blog.title }}
            </h1>
            <h2 class="info">
                {{ blog.date }}
            </h2>

            <div class="content" v-html="blog.content"></div>

            <h2>他の記事</h2>
            <div v-for="(blog, index) in blogs" :key="index" class="blog">
                <nuxt-link :to="{ name: 'blog-date-filePath', params: { date: blog.date, filePath: blog.filePath }}">
                    {{ blog.title }}
                </nuxt-link>
            </div>

            <nuxt-link class="button" to="/blog">Blog</nuxt-link>
            <nuxt-link class="button" to="/">Top</nuxt-link>
        </div>
    </section>
</template>

<script>
import axios from '~/plugins/axios'

export default {
    transition (to, from) {
        if (!from) return 'slide-left'
        const toDepth = to.path.split('/').length
        const fromDepth = from.path.split('/').length
        return toDepth < fromDepth ? 'slide-right' : 'slide-left'
    },
    async asyncData ({ params, error }) {
        const blogs = await axios.get('/api/blog')
        const blog = await axios.get('/api/blog/' + params.date + '/' + params.filePath)

        return {
            blogs: blogs.data,
            blog: blog.data
        }
    },
    head () {
        return {
            title: `Blog: ${this.blog.title}`
        }
    }
}
</script>

<style scoped>
.title {
    margin-top: 30px;
}
.info {
    font-weight: 300;
    color: #9aabb1;
    margin: 0;
    margin-top: 10px;
}
.button {
    margin-top: 30px;
}
</style>
