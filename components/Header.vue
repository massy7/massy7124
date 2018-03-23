<template>
    <div class="">
        <header class="header-sm-and-up hidden-xs-only main-bg-color">
            <h1>Massy7124's Portfolio</h1>
            <h2>Full-stack Web Engineer</h2>
            <my-navbar/>
        </header>
        <header class="header-xs hidden-sm-and-up main-bg-color"
                :class="{ 'fixed-top': isFixedTop}">
            <h1>Massy7124's Portfolio</h1>
            <h2>Full-stack Web Engineer</h2>
            <my-navtab :isFixedTop="isFixedTop"/>
        </header>
    </div>
</template>

<script>
import MyNavbar from '~/components/Navbar.vue'
import MyNavtab from '~/components/Navtab.vue'

export default {
    components: {
        MyNavbar,
        MyNavtab
    },
    data: () => {
        return {
            scrollY   : 0,
            isFixedTop: 0
        }
    },
    mounted () {
        window.addEventListener('scroll', this.handleScroll)
    },
    methods: {
        handleScroll () {
            this.scrollY = window.scrollY
            this.isFixedTop = this.scrollY > 86
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
        font-size: 2em;
        margin: 0;
    }
}

.header-xs {
    min-height: 78px;
    padding-top: 10px;
    text-align: center;
    color: white;

    h1 {
        font-weight: 100;
        font-size: 2em;
        margin: 0;
    }
    h2 {
        font-weight: 100;
        font-size: 1.5em;
        margin: 0 0 10px 0;
    }

    &.fixed-top {
        margin-bottom: 51px;
    }
}
</style>