<template>
    <section class="container">
        <div class="wrapper">
            <h1 class="title">
                Works
            </h1>
        </div>
    </section>
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
.title{
    margin: 30px 0;
}
</style>
