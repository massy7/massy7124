<template>
    <nav class="" :class="{ 'fixed-top bg-color-main': isFixedTop }">
        <nuxt-link class="button" to="/" exact><span class="fa fa-home"></span><br>Home</nuxt-link>
        <nuxt-link class="button" to="/works"><span class="fa fa-code"></span><br>Works</nuxt-link>
        <!-- <nuxt-link class="button" to="/history"><span class="fa fa-list"></span>History</nuxt-link> -->
        <nuxt-link class="button" to="/blog/1"><span class="fa fa-edit"></span><br>Blog</nuxt-link>
        <nuxt-link class="button" to="/contact"><span class="fa fa-envelope"></span><br>Contact</nuxt-link>
    </nav>
</template>

<script>
export default {
    props: {
        isFixedTop: Boolean
    }
}
</script>

<style lang="scss" scoped>
nav {
    width: 100vw;

    .button, .button:visited {
        width: 25vw;
        display: inline-block;
        color: white;
        letter-spacing: 1px;
        text-decoration: none;
        text-transform: uppercase;
        padding: 6px 0px;
        margin: 0px;
        font-size: 1.0em;
    }
    .button:hover, .button:focus{
        color: black;
        background-color: white;
    }
    .button.nuxt-link-active{
        color: black;
        background-color: white;
    }

    &.fixed-top {
        position: fixed;
        top: 0px;
        left: 0;
        z-index: 100;
    }
}

</style>