<template>
    <nav>
        <nuxt-link class="button" to="/" exact><span class="fa fa-home"></span>Home</nuxt-link>
        <nuxt-link class="button" to="/works"><span class="fa fa-code"></span>Works</nuxt-link>
        <!-- <nuxt-link class="button" to="/history"><span class="fa fa-list"></span>History</nuxt-link> -->
        <nuxt-link class="button" to="/blog/1"><span class="fa fa-edit"></span>Blog</nuxt-link>
        <nuxt-link class="button" to="/contact"><span class="fa fa-envelope"></span>Contact</nuxt-link>
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