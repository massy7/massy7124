<template>
    <article class="wrapper">
        <section>
            <h1>Account</h1>

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
                <!-- <div class="">
                    <a href="https://github.com/massy7" title="GitHub" target="_blank">
                        <img class="bland-logo" src="/img/logo/github.svg" alt="GitHub" style="width:70%;">
                    </a>
                </div> -->
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
            <h1>Form</h1>
            <!-- <el-form ref="form" :rules="rules" label-position="top" :model="form" class="form-direct">
                <el-form-item label="アカウント" prop="name">
                    <el-input placeholder="本名、Twitter、Facebookなど" v-model="form.account"></el-input>
                </el-form-item>
                <el-form-item label="本文" prop="content">
                    <el-input
                        type="textarea"
                        :autosize="{ minRows: 5, maxRows: 10}"
                        placeholder="本文"
                        v-model="form.content"
                    ></el-input>

                </el-form-item>
                <el-form-item class="center">
                    <el-button
                        type="primary"
                        :disabled="form.name === '' || form.account === '' || form.content === ''"
                        @click="submitForm('form')"
                    >
                        送信
                    </el-button>
                </el-form-item>
            </el-form> -->
            <div class="center">
                <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSfMaxwA9ETS1pvwDSivvW5pTD_DuYbePh-VJ8UYWF6xGbcHPA/viewform?embedded=true" style="width: 80vw; max-width: 660px; height: 860px;" frameborder="0" marginheight="0" marginwidth="0">読み込んでいます...</iframe>
            </div>
        </section>
    </article>
</template>

<script>
// import line from '@line/bot-sdk'
const line = require('@line/bot-sdk')

export default {
    data () {
        return  {
            form: {
                account: '',
                content: ''
            },
            rules: {
                account: [{ required: true, message: '必須項目', trigger: 'blur' }],
                content: [{ required: true, message: '必須項目', trigger: 'blur' }]
            }
        }
    },
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
        },
        submitForm (formName) {
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    // TODO: expressにうつしてサーバサイドでやる？
                    const client = new line.Client({
                        channelAccessToken: 'uT+a71u7DQqGShjX3WkbjbY7miACp5sa+SWNBzVQTcE9u81tAwi1A+5OkkpsCHE0GmRCIf7tdsA1evImtu1ts6PCpsNI5b83DYas8OcG3cqv90C9OaIFW0JBLp+Ys78NVujM6+SG/e6RniQRz09DgAdB04t89/1O/w1cDnyilFU='
                    })

                    const message = {
                        type: 'text',
                        text: 'アカウント\n' + this.form.account + '\n本文\n' + this.form.content
                    }

                    client.pushMessage('massy7124', message)
                        .then(() => {
                            this.$message({
                                message: '送信完了しました',
                                type   : 'success'
                            })
                        })
                        .catch((err) => {
                            this.$message.error('送信に失敗しました。もう一度おためしください')
                            console.log(err)
                        })
                }
                else {
                    return false
                }
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

.form-direct {
    margin: 0 auto;
    max-width: 500px;
}
</style>
