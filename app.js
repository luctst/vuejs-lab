Vue.component("App", {
    template: `
    <div>
        <Header/>
        <news-list></news-list>
    </div>
    `
});

const vm = new Vue({
    el: "#root"
});