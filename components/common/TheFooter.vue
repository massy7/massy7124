<template>
    <footer class="bg-color-main fixed-bottom">
        <my-navtab class="hidden-sm-and-up"/>
        <nuxt-link v-if="$store.state.authUser" to="/auth">SignIn : {{ $store.state.authUser.username }}</nuxt-link>
        <nuxt-link class="hidden-xs-only copyright" to="/auth"><span class="fa fa-copyright"></span> 2018 Koki Mashiko</nuxt-link>
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

    a {
        color: white;
    }
}

.copyright {
    color: white;
}

.fixed-bottom {
    position: fixed;
    bottom: 0px;
    left: 0;
    z-index: 100;
}
</style>
