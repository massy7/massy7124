<template>
    <article class="wrapper">
        <el-collapse v-model="latestId" class="blog">
            <el-collapse-item v-for="(blog, index) in blogs" :key="index" :name="blog._id">
                <template slot="title">
                    <div style="position:relative;">
                        <div class="blog-title">
                            {{ blog.title }}
                        </div>
                        <div class="hidden-xs-only blog-date" style="position:absolute; top:0px; right:36px;">{{ new Date(blog.createdAt).toLocaleString().slice(0, -3) }}</div>
                    </div>
                </template>
                <el-tag v-for="(tag, index) in blog.tags" :key="index" size="medium">{{ tag }}</el-tag>
                <div class="content" v-html="blog.content"></div>
                <br>
                <div class="hidden-sm-and-up blog-date">{{new Date(blog.createdAt).toLocaleString().slice(0, -3)}}</div>
            </el-collapse-item>
        </el-collapse>

        <div class="center">
            <el-pagination
                layout="prev, pager, next"
                :total="total"
                :page-size="10"
                :current-page="currentPage"
                @current-change="currentPageChange"
            >
            </el-pagination>
        </div>

        <nuxt-link class="fa fa-edit" to="/blog/create">Blog作成</nuxt-link>
    </article>
</template>

<script>
import axios from '~/plugins/axios'

export default {
    data () {
        return {
            total      : 0,
            currentPage: 1
        }
    },
    validate ({params}) {
        return /^\d+$/.test(params.page)
    },
    created () {
        this.currentPage = Number(this.$route.params.page)
        axios.get('/api/blog/count-all')
            .then((response) => {
                this.total = response.data
            }).catch((err) => {
                console.log(err)
            })
    },
    async asyncData ({params}) {
        let { data } = await axios.get('/api/blog/' + (params.page - 1))
        return {
            blogs   : data,
            latestId: data[0]._id
        }
    },
    methods: {
        currentPageChange (val) {
            this.$router.push({path: '/blog/' + val})
        }
    },
    transition (to, from) {
        if (!from) return 'slide-left'
        if (from.name === 'contact' || +to.params.page < +from.params.page) {
            return 'slide-right'
        }
        else {
            return 'slide-left'
        }
    },
    head () {
        return {
            title: 'Blog'
        }
    }
}
</script>

<style lang="scss" scoped>
.blog {
    text-align: left;
}
.blog-title {
    font-size: 1.5em;
    font-weight: bold;

    width: 60vw;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}
.blog-date {
    font-style: italic;
}
</style>
