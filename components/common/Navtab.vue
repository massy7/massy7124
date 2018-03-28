<template>
    <nav class="" :class="{ 'fixed-top bg-color-main': isFixedTop }">
        <nuxt-link class="button fa fa-home" to="/" exact><br>Home</nuxt-link>
        <nuxt-link class="button fa fa-code" to="/works"><br>Works</nuxt-link>
        <!-- <nuxt-link class="button fa fa-list" to="/history"><br>History</nuxt-link> -->
        <nuxt-link class="button fa fa-edit" to="/blog/1"><br>Blog</nuxt-link>
        <nuxt-link class="button fa fa-envelope" to="/contact"><br>Contact</nuxt-link>
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