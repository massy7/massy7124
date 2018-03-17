<template>
    <article class="wrapper">

        <section>
            <h1>Social</h1>

            <div class="grid grid-social center">
            	<div class="">
                    <a href="https://twitter.com/massy7124" class="no-hover twitter" target="_blank">
                        <div class="icon-social fab fa-twitter-square"></div>
                        Twitter
                    </a>
                </div>
            	<div class="">
                    <a href="https://www.facebook.com/massy7124" class="no-hover facebook" target="_blank">
                        <div class="icon-social fab fa-facebook-square"></div>
                        Facebook
                    </a>
                </div>
            	<div class="">
                    <a href="https://www.instagram.com/massy7124" class="no-hover instagram" target="_blank">
                        <div class="icon-social fab fa-instagram"></div>
                        Instagram
                    </a>
                </div>
            	<div class="">
                    <a href="https://github.com/massy7" class="no-hover github" target="_blank">
                        <div class="icon-social fab fa-github-square"></div>
                        GitHub
                    </a>
                </div>
            </div>
        </section>

        <section>
            <h1>E-mail</h1>
            <el-row :gutter="0" type="flex" justify="center" class="center">
                <el-col :xs="12" :sm="8">
                    <div class="icon-link icon fab fa-envelope" @click="copyToClipboard"></div>
                    <el-input id="email" class="center" value="koki.mashiko.1995@gmail.com" readonly></el-input>
                </el-col>
            </el-row>
        </section>

    </article>
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
    },
    methods: {
        copyToClipboard () {
            const email = document.querySelector('#email')
            email.select()
            document.execCommand('copy')
            this.$notify({
                title   : 'E-mail Address Copied!',
                type    : 'success',
                position: 'bottom-right'
            })
        }
    }
}
</script>

<style scoped>
@media screen and (max-width: 767px) {
    .grid-social {
    	grid-template-rows: 1fr 1fr;
    	grid-template-columns: 1fr 1fr;
    }
}

@media screen and (min-width: 768px) {
    .grid-social {
    	grid-template-rows: 1fr;
    	grid-template-columns: 1fr 1fr 1fr 1fr;
    }
}
</style>
