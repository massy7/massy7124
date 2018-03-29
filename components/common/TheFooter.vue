<template>
    <footer class="bg-color-main">
        <my-navtab class="hidden-sm-and-up"/>
        <span v-if="$store.state.authUser">SignIn : {{ $store.state.authUser }}<br></span>
        <nuxt-link class="copyright" to="/auth">© 2018 Koki Mashiko</nuxt-link>
    </footer>
</template>

<script>
import MyNavtab from '~/components/common/Navtab.vue'

export default {
    components: {
        MyNavtab
    }
}
</script>

<style lang="scss" scoped>
footer {
    width: 100vw;
    text-align: center;
    color: white;
}

.copyright {
    color: white;
}
</style>
