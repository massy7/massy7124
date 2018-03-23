<template>
    <nav>
        <nuxt-link class="button fab fa-home" to="/" exact>Home</nuxt-link>
        <nuxt-link class="button fab fa-code" to="/works">Works</nuxt-link>
        <!-- <nuxt-link class="button fab fa-list" to="/history">History</nuxt-link> -->
        <nuxt-link class="button fab fa-edit" to="/blog">Blog</nuxt-link>
        <nuxt-link class="button fab fa-envelope" to="/contact">Contact</nuxt-link>
    </nav>
</template>

<script>

</script>

<style lang="scss" scoped>
nav {
    margin-top: 10px;

    .button, .button:visited {
        display: inline-block;
        color: white;
        letter-spacing: 1px;
        text-decoration: none;
        text-transform: uppercase;
        padding: 15px 20px;
        margin: 0px;
        font-size: 1.5em;
    }
    .button:hover, .button:focus{
        color: black;
        background-color: white;
        /* background-color: rgba( 0, 191, 255, 0.5 ); */
    }
    .button.nuxt-link-active{
        color: black;
        background-color: white;
    }
}
</style>