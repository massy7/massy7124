<template>
    <section class="container">
        <img src="~assets/img/logo.png" alt="Nuxt.js Logo" class="logo" />
        <h1 class="title">
            {{ blog.name }}
        </h1>
        <h2 class="info">
            {{ blog.name }}
        </h2>

        <nuxt-link class="button" to="/blog">Blog</nuxt-link>
        <nuxt-link class="button" to="/">Top</nuxt-link>
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
    asyncData ({ params, error }) {
        return axios.get('/api/blog/' + params.id)
            .then((res) => {
                return { blog: res.data }
            })
            .catch((e) => {
                error({ statusCode: 404, message: 'Blog not found' })
            })
    },
    head () {
        return {
            title: `Blog: ${this.blog.name}`
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
