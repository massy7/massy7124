<template>
    <article class="wrapper">
        <section>
            <h1>作ったもの1</h1>
            <div class="">
                作ったもの1の内容
            </div>
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
            title: 'Works'
        }
    }
}
</script>

<style scoped>

</style>
