<template>
    <div>
        <my-header/>
        <!-- <my-sidebar/> -->
        <nuxt/>
        <my-footer/>
    </div>
</template>

<script>
import MyHeader from '~/components/Header.vue'
import MyNavbar from '~/components/Navbar.vue'
import MyFooter from '~/components/Footer.vue'

export default {
    components: {
        MyHeader,
        MyNavbar,
        MyFooter
    }
}
</script>

<style lang="scss">

</style>
