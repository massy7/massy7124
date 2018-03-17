<template>
    <article class="wrapper">
        <el-collapse v-model="latestId" class="blog">
            <el-collapse-item v-for="(blog, index) in blogs" :key="index" :name="blog.id">
                <template slot="title">
                    <div class="blog-title" style="position:relative;">
                        {{ blog.title }} <div class="" style="display:inline-block; position:absolute; right:36px;">{{ blog.date }}</div>
                    </div>
                </template>
                <div class="content" v-html="blog.content"></div>
                <nuxt-link :to="{ name: 'blog-date-filePath', params: { date: blog.date, filePath: blog.filePath }}">
                    リンク
                </nuxt-link>
            </el-collapse-item>
        </el-collapse>

        <!-- <div v-for="(blog, index) in blogs" :key="index" class="blog">
            <nuxt-link :to="{ name: 'blog-date-filePath', params: { date: blog.date, filePath: blog.filePath }}">
                {{ blog.title }}
            </nuxt-link>
        </div> -->
    </article>
</template>

<script>
import axios from '~/plugins/axios'

export default {
    async asyncData () {
        let { data } = await axios.get('/api/blog')
        data = data.slice().reverse()
        return {
            blogs   : data,
            latestId: data[0].id
        }
    },
    transition (to, from) {
        if (!from) return 'slide-left'
        const toDepth = to.path.split('/').length
        const fromDepth = from.path.split('/').length
        return toDepth < fromDepth ? 'slide-right' : 'slide-left'
    },
    head () {
        return {
            title: 'Blog'
        }
    }
}
</script>

<style scoped>
.blog {
    text-align: left;
}
.blog-title {
    font-size: 1.5em;
    font-weight: bold;
}
</style>
