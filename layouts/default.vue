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
import MySidebar from '~/components/Sidebar.vue'
import MyFooter from '~/components/Footer.vue'

export default {
    components: {
        MyHeader,
        MySidebar,
        MyFooter
    }
}
</script>

<style>

</style>
