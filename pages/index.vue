<template>
    <section class="container">
        <div class="wrapper">

            <a id="profile"></a>
            <div class="section">
                <h1>Profile</h1>
            </div>
            
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
            title: 'Massy\'s Home'
        }
    }
}
</script>

<style scoped>
.title{
    margin: 30px 0;
}
</style>
