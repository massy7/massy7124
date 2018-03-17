<template>
    <article class="wrapper">
        <section class="blog">
            <h1 class="blog-title">
                {{ blog.title }}
            </h1>
            <h2 class="info">
                {{ blog.date }}
            </h2>

            <div class="content" v-html="blog.content"></div>
        </section>
    </article>
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
            blog : blog.data
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
.info {
    font-weight: 300;
    color: #9aabb1;
    margin: 0;
    margin-top: 10px;
}
.button {
    margin-top: 30px;
}
.blog {
    text-align: left;
}
.blog-title {
    font-size: 1.5em;
    font-weight: bold;
}
</style>
