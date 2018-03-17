<template>
    <header>
        <h1 class="title">Massy7124's Portfolio</h1>
        <h2 class="title-sub">Full-stack Web Engineer</h2>

        <nav>
            <nuxt-link class="button fab fa-home" to="/" exact>Home</nuxt-link>
            <nuxt-link class="button fab fa-code" to="/works">Works</nuxt-link>
            <!-- <nuxt-link class="button fab fa-list" to="/history">History</nuxt-link> -->
            <nuxt-link class="button fab fa-edit" to="/blog">Blog</nuxt-link>
            <nuxt-link class="button fab fa-envelope" to="/contact">Contact</nuxt-link>
        </nav>
    </header>
</template>

<script>

</script>

<style scoped>
header {
    background-color: rgba( 0, 191, 255, 0.8 );
    padding: 50px 50px 0px 50px;
    text-align: center;
}

.title {
    color: white;
    font-weight: 300;
    font-size: 3em;
    margin: 0;
}

.title-sub {
    color: white;
    font-weight: 300;
    font-size: 2em;
    margin: 0;
}

nav {
    margin-top: 10px;
}

nav > .button, .button:visited {
    display: inline-block;
    color: white;
    letter-spacing: 1px;
    text-decoration: none;
    text-transform: uppercase;
    padding: 15px 20px;
    margin: 10px 0px 0px 0px;
    font-size: 1.5em;
}

nav > .button:hover, .button:focus{
    color: black;
    background-color: white;
    /* background-color: rgba( 0, 191, 255, 0.5 ); */
}

nav > .button.nuxt-link-active{
    color: black;
    background-color: white;
}


</style>