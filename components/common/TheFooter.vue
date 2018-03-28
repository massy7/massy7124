<template>
    <footer class="bg-color-main">
        <my-navtab class="hidden-sm-and-up"/>
        <span>© 2018 Koki Mashiko</span>
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
</style>
