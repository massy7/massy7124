<template>
    <div id="header">
        <header class="hidden-xs-only header-sm-and-up bg-color-main">
            <h1>Massy7124</h1>
            <h2>Web Developer</h2>
            <my-navbar/>
        </header>
        <header class="hidden-sm-and-up header-xs bg-color-main">
            <h1>Massy7124</h1>
            <h2>Web Developer</h2>
        </header>
    </div>
</template>

<script>
import MyNavbar from '~/components/common/TheHeaderNavbar.vue'

export default {
    components: {
        MyNavbar
    },
    data () {
        return {
            scrollY   : 0,
            isFixedTop: false
        }
    },
    mounted () {
        window.addEventListener('scroll', this.handleScroll)
    },
    methods: {
        handleScroll () {
            this.scrollY = window.scrollY
            this.isFixedTop = this.scrollY > 75
        }
    }
}
</script>

<style lang="scss" scoped>
.header-sm-and-up {
    padding: 50px 50px 0px 50px;
    text-align: center;
    color: white;

    h1 {
        font-weight: 300;
        font-size: 3em;
        margin: 0;
    }
    h2 {
        font-weight: 300;
        font-size: 1.5em;
        margin: 0;
    }
}

.header-xs {
    padding-top: 10px;
    padding-bottom: 10px;
    text-align: center;
    color: white;

    h1 {
        font-weight: 100;
        font-size: 2em;
        margin: 0;
    }
    h2 {
        font-weight: 100;
        font-size: 1em;
        margin: 0;
    }
}
</style>