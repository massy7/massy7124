<template>
    <section class="container">
        <div class="wrapper">
            <section>
                <h1 class="">Social</h1>
                
            </section>
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
            title: 'Contact'
        }
    }
}
</script>

<style scoped>
.title{
    margin: 30px 0;
}
</style>
