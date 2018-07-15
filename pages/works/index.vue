<template>
    <article class="wrapper">
        <section>
            <h1 class="margin-bottom-0"><a href="https://www.draft.partners/" class="draft">Draft</a></h1>
            <p class="center margin-0"><a href="https://www.draft.partners/" class="draft">Webマーケティング支援プラットフォーム</a></p>
            <p class="center"><a href="https://www.techloco.co.jp/">（株式会社テクロコ）</a></p>
            <h3></h3>
            <div class="">
                Draftのエンジニアとして、サービスの開発をしておりました。<br>
                社会人として初めて携わったサービスで、自分の書き方ではなく、企業のサービスとして考えなければならない点などを学びました。<br>

            </div>
        </section>
        <section>
            <h1>使える画像検索</h1>
            <el-tag size="medium">CakePHP3</el-tag>
            <el-tag size="medium">jQuery</el-tag>
            <el-tag size="medium">MySQL</el-tag>
            <div class="detail">
                <div class="center">
                    <!-- <a href="http://resimage.net/resimage2/" title="resimage" target="_blank"> -->
                        <img class="works-image" src="/img/resimage-site.png" alt="resimage">
                    <!-- </a> -->
                </div>
                学生の頃に作った、Twitter上で漫画やアニメ、ネタ画像などを用いて会話をする時に使える画像を投稿するサービスです。<br>
                画像のタグ付けや検索、お気に入り、マイページなどを用意して自分好みの画像を探しやすくしました。<br>
            </div>
        </section>
        <section>
            <h1>Skype自動応答スクリプト</h1>
            <el-tag size="medium">JavaScript (Windows Script Host)</el-tag>
            <el-tag size="medium">NLP</el-tag>
            <el-tag size="medium">JUMAN</el-tag>
            <div class="">
                Skypeのchatbotです。<br>
                botに「webとは何ですか」のように質問すると、Wikipediaベースで答えを返してくれます。<br>
                また、Minecraftというゲームのサーバーを起動できるコマンドなども用意し、<br>
                私が席を外しているときでも他の人が私のPCのサーバーを起動することができるようになっています。
            </div>
        </section>
    </article>
</template>

<script>
export default {
    transition (to, from) {
        if (!from) return 'slide-left'
        return from.name === 'index' ? 'slide-left' : 'slide-right'
    },
    head () {
        return {
            title: 'Works'
        }
    }
}
</script>

<style lang="scss" scoped>
.draft {
    color: #D85252;
}

.works-image {
    width: 90%;
    max-width: 500px;
    padding: 10px;
}

</style>
