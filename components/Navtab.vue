<template>
    <nav class="" :class="{ 'fixed-top': isFixedTop, 'main-bg-color': isFixedTop }">
        <nuxt-link class="button fab fa-home" to="/" exact><br>Home</nuxt-link>
        <nuxt-link class="button fab fa-code" to="/works"><br>Works</nuxt-link>
        <!-- <nuxt-link class="button fab fa-list" to="/history"><br>History</nuxt-link> -->
        <nuxt-link class="button fab fa-edit" to="/blog"><br>Blog</nuxt-link>
        <nuxt-link class="button fab fa-envelope" to="/contact"><br>Contact</nuxt-link>
    </nav>
</template>

<script>
export default {
    props: {
        isFixedTop: false
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