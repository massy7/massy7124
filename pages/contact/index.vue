<template>
    <article class="wrapper">

        <section>
            <h1>Social</h1>

            <div class="grid grid-logo center">
                <div class="">
                    <a href="https://twitter.com/massy7124" title="Twitter" target="_blank">
                        <img class="bland-logo" src="/img/logo/twitter.svg" alt="Twitter">
                    </a>
                </div>
                <div class="">
                    <a href="https://www.facebook.com/massy7124" title="Facebook" target="_blank">
                        <img class="bland-logo" src="/img/logo/facebook.svg" alt="Facebook" style="width:70%;">
                    </a>
                </div>
                <div class="">
                    <a href="https://www.instagram.com/massy7124" title="Instagram" target="_blank">
                        <img class="bland-logo" src="/img/logo/instagram.svg" alt="Instagram">
                    </a>
                </div>
                <div class="">
                    <a href="https://github.com/massy7" title="GitHub" target="_blank">
                        <img class="bland-logo" src="/img/logo/github.svg" alt="GitHub" style="width:70%;">
                    </a>
                </div>
                <div class="">
                    <a href="https://ask.fm/massy7124" title="Ask.fm" target="_blank">
                        <img class="bland-logo" src="/img/logo/askfm.svg" alt="Ask.fm">
                    </a>
                </div>
                <div class="">
                    <a href="https://peing.net/ja/massy7124" title="Peing" target="_blank">
                        <img class="bland-logo" src="/img/logo/peing.svg" alt="Peing">
                    </a>
                </div>
                <div class="">
                    <a href="https://www.wantedly.com/users/18012899" title="Wantedly" target="_blank">
                        <img class="bland-logo" src="/img/logo/wantedly.svg" alt="Wantedly" style="width:70%;">
                    </a>
                </div>
            </div>
        </section>

        <section>
            <h1>E-mail</h1>
            <div id="email" class="center">
                <div id="icon-email" class="fa fa-envelope" @click="copyToClipboard"></div>
                <el-input id="email-address" class="center" value="koki.mashiko.1995@gmail.com" readonly></el-input>
            </div>
        </section>

    </article>
</template>

<script>
export default {
    methods: {
        copyToClipboard () {
            const email = document.querySelector('#email-address')
            email.select()
            document.execCommand('copy')
            this.$notify({
                title   : 'E-mail Address Copied!',
                type    : 'success',
                position: 'bottom-right'
            })
        }
    },
    transition (to, from) {
        if (!from) return 'slide-left'
        return 'slide-left'
    },
    head () {
        return {
            title: 'Contact'
        }
    }
}
</script>

<style lang="scss" scoped>
#email {
    width: 250px;
    margin: 0 auto;
}

#email /deep/ #email-address {
    width: 250px;
    text-align: center;
}

#icon-email {
    font-size: 4em;
}
</style>
