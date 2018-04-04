<template>
    <article class="wrapper center">
        <h1>Login</h1>
        <el-form v-if="!$store.state.authUser" class="form-login" ref="form" :rules="rules" label-position="top" label-width="300px" :model="form">
            <el-alert
                v-if="errorMessage"
                class="error-login"
                :title="errorMessage"
                :closable="false"
                type="warning"
                center
                show-icon
            ></el-alert>
            <el-form-item prop="username">
                <el-input placeholder="Username" v-model="form.username" @keyup.enter.native="login('form')"></el-input>
            </el-form-item>
            <el-form-item prop="password">
                <el-input type="password" placeholder="Password" v-model="form.password" @keyup.enter.native="login('form')"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" :disabled="form.username === '' || form.password === ''" @click="login('form')">Login</el-button>
            </el-form-item>
        </el-form>
        <el-form v-else>
            <el-form-item>
                <el-button type="info" class="fa fa-sign-out-alt" @click="logout()">Logout</el-button>
            </el-form-item>
        </el-form>
    </article>
</template>

<script>
export default {
    data () {
        return {
            form: {
                username: '',
                password: ''
            },
            errorMessage: null,
            rules       : {
                username: [{ required: true, message: '必須項目', trigger: 'blur' }],
                password: [{ required: true, message: '必須項目', trigger: 'blur' }]
            }
        }
    },
    methods: {
        login (formName) {
            this.$refs[formName].validate(async (valid) => {
                if (valid) {
                    try {
                        await this.$store.dispatch('login', {
                            username: this.form.username,
                            password: this.form.password
                        })
                    }
                    catch (e) {
                        this.errorMessage = e.message
                    }
                }
                else {
                    return false
                }
            })
        },
        async logout () {
            try {
                await this.$store.dispatch('logout')
            }
            catch (e) {
                this.formError = e.message
            }
        }
    },
    transition (to, from) {
        if (!from) return 'slide-left'
        if (from.name === 'index' || from.name === 'works' || (to.path.split('/').length >= from.path.split('/').length)) {
            return 'slide-left'
        }
        else {
            return 'slide-right'
        }
    },
    head () {
        return {
            title: 'Account'
        }
    }
}
</script>

<style lang="scss" scoped>
.form-login {
    max-width: 300px;
    margin: 0 auto;
}

.error-login {
    margin-bottom: 10px;
}
</style>
