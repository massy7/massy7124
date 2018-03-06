<template>
    <section class="container">
        <img src="~assets/img/logo.png" alt="Nuxt.js Logo" class="logo" />
        <h1 class="title">
            Blog
        </h1>
        <h2 class="info">
            {{ user.name }}
        </h2>
        <nuxt-link class="button" to="/">
            Blogs
        </nuxt-link>
    </section>
</template>

<script>
import axios from '~/plugins/axios'

export default {
    name: 'id',
    asyncData ({ params, error }) {
        return axios.get('/api/blog/' + params.id)
            .then((res) => {
                return { user: res.data }
            })
            .catch((e) => {
                error({ statusCode: 404, message: 'Blog not found' })
            })
    },
    head () {
        return {
            title: `Blog: ${this.user.name}`
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
