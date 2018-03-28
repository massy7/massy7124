<template>
    <div>
        <my-header/>
        <!-- <my-sidebar/> -->
        <nuxt/>
        <my-footer/>
    </div>
</template>

<script>
import MyHeader from '~/components/common/TheHeader.vue'
import MyFooter from '~/components/common/TheFooter.vue'

export default {
    components: {
        MyHeader,
        MyFooter
    }
}
</script>

<style lang="scss">

</style>
