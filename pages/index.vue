<template>
    <article class="wrapper">
        <section>
            <a id="profile"></a>
            <h1>Profile</h1>
            <div class="grid grid-profile">
            	<div class="profile-image">
                    <img class="icon-profile" src="/img/massy7124.jpg" alt="massy7124">
                </div>
            	<div class="name">
                    Koki Mashiko
                </div>
            	<div class="detail">
                    益子滉輝と申します。<br>
                    2017年卒で社会人となり、Web Engineerとしてバックエンド、フロントエンドともに設計・実装を行っています。<br>
                    aaa <br>
                    aaa <br>
                </div>
            </div>
        </section>

        <section>
            <a id="technology"></a>
            <h1>Technology</h1>

            <div class="grid center">
            	<div class="">
                    <a href="https://ja.nuxtjs.org/" title="Nuxt.js" target="_blank">
                        <img class="bland-logo" src="/img/logo/nuxt.svg" alt="Nuxt.js">
                    </a>
                </div>
            	<div class="">
                    <a href="https://jp.vuejs.org/" title="Vue.js" target="_blank">
                        <img class="bland-logo" src="/img/logo/vue.svg" alt="Vue.js">
                    </a>
                </div>
            	<div class="">
                    <a href="http://expressjs.com/" title="Express" target="_blank">
                        <img class="bland-logo" src="/img/logo/express.svg" alt="Express">
                    </a>
                </div>
                <div class="">
                    <a href="https://nodejs.org/ja/" title="Node.js" target="_blank">
                        <img class="bland-logo" src="/img/logo/nodejs-color.svg" alt="Node.js">
                    </a>
                </div>
                <div class="">
                    <a href="https://webpack.js.org/" title="webpack" target="_blank">
                        <img class="bland-logo" src="/img/logo/webpack.svg" alt="webpack">
                    </a>
                </div>
                <div class="">
                    <a href="https://nginx.org/" title="nginx" target="_blank">
                        <img class="bland-logo" src="/img/logo/nginx.svg" alt="nginx">
                    </a>
                </div>
            	<div class="">
                    <a href="https://laravel.com/" title="Laravel5" target="_blank">
                        <img class="bland-logo" src="/img/logo/laravel-color.svg" alt="Laravel5">
                    </a>
                </div>
            	<div class="">
                    <a href="https://cakephp.org/" title="CakePHP3" target="_blank">
                        <img class="bland-logo" src="/img/logo/cakephp.svg" alt="CakePHP3">
                    </a>
                </div>
                <div class="">
                    <a href="http://www.php.net/" title="PHP" target="_blank">
                        <img class="bland-logo" src="/img/logo/php-color.svg" alt="PHP">
                    </a>
                </div>
            	<div class="">
                    <a href="https://html.spec.whatwg.org/multipage/" title="HTML5" target="_blank">
                        <img class="bland-logo" src="/img/logo/html5-color.svg" alt="HTML5">
                    </a>
                </div>
            	<div class="">
                    <a href="https://www.w3.org/Style/CSS/" title="CSS3" target="_blank">
                        <img class="bland-logo" src="/img/logo/css3-color.svg" alt="CSS3">
                    </a>
                </div>
            	<div class="">
                    <a href="https://www.ecma-international.org/" title="ES6" target="_blank">
                        <img class="bland-logo" src="/img/logo/es6.svg" alt="ES6">
                    </a>
                </div>
                <div class="">
                    <a href="https://jquery.com/" title="jQuery" target="_blank">
                        <img class="bland-logo" src="/img/logo/jquery.svg" alt="jQuery">
                    </a>
                </div>
                <div class="">
                    <a href="https://isocpp.org/" title="C++" target="_blank">
                        <img class="bland-logo" src="/img/logo/C++.svg" alt="C++">
                    </a>
                </div>
            	<div class="">
                    <a href="https://github.com/" title="GitHub" target="_blank">
                        <img class="bland-logo" src="/img/logo/github.svg" alt="GitHub">
                    </a>
                </div>
            	<div class="">
                    <a href="https://www.docker.com/" title="Docker" target="_blank">
                        <img class="bland-logo" src="/img/logo/docker.svg" alt="Docker">
                    </a>
                </div>
            	<div class="">
                    <a href="https://www.mysql.com/" title="MySQL" target="_blank">
                        <img class="bland-logo" src="/img/logo/mysql-logo.svg" alt="MySQL">
                    </a>
                </div>
            	<div class="">
                    <a href="https://aws.amazon.com/ec2/" title="Amazon EC2" target="_blank">
                        <img class="bland-logo" src="/img/logo/amazon-ec2.svg" alt="Amazon EC2">
                    </a>
                </div>
            	<div class="">
                    <a href="https://atom.io/" title="Atom" target="_blank">
                        <img class="bland-logo" src="/img/logo/atom-editor.svg" alt="Atom">
                    </a>
                </div>
            </div>
        </section>
    </article>
</template>

<script>
export default {
    transition (to, from) {
        if (!from) return 'slide-left'
        return 'slide-right'
    },
    head () {
        return {
            title: 'Massy\'s Home'
        }
    }
}
</script>

<style lang="scss" scoped>
.grid-profile {
    grid-template-rows: 1fr 4fr;
    grid-template-columns: 1fr 3fr;
    grid-template-areas:
        "profile-image name"
        "profile-image detail";

    .profile-image {
        grid-area: profile-image;
    }

    .name {
        grid-area: name;
        font-size: 2em;
    }

    .detail {
        grid-area: detail;
    }

}

</style>
