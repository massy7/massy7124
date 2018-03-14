<template>
    <section class="container">
        <div class="wrapper">
            <h1 class="">
            </h1>
            <el-steps direction="vertical">
                <el-step title="Step 1"></el-step>
                <el-step title="Step 2"></el-step>
                <el-step title="Step 3"></el-step>
            </el-steps>
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
            title: 'History'
        }
    }
}
</script>

<style scoped>
.title {
    margin: 30px 0;
}
</style>
