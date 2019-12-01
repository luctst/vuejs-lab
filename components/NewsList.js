Vue.component("news-list", {
    template: `
    <main class="row">
        <div class="col-12 text-center" v-if="!dataFetched" style="width: 100%;">
            <Loader/>
        </div>
        <div class="col-3" v-else v-for="(post, index) in data" :key="index">
            <p>{{post.title}}</p>
            <p class="small">{{post.body}}</p>
        </div>
    </main>
    `,
    data () {
        return {
            dataFetched: false,
            data: []
        }
    },
    mounted () {
        fetch("https://jsonplaceholder.typicode.com/posts/")
        .then(data => data.json())
        .then(dataParsed => {
            this.dataFetched = true,
            this.data = [...dataParsed]
        });
    }
});