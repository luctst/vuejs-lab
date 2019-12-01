Vue.component("Header", {
    template: `
    <header class="row">
        <div class="col-12 d-flex">
            <h1>{{message}}</h1>
            <button @click="reverseMsg">Click to reverse</button>
        </div>
    </header>
    `,
    data () {
        return {
            message: "Header Test"
        }
    },
    methods: {
        reverseMsg: function (e) {
            e.preventDefault();
            e.stopPropagation();
            this.message = this.message.split("").reverse().join("")
        }
    }
});