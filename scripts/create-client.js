var app = new Vue({
    el: '#app',
    data: {
    },

    methods: {
        submit: function () {
            axios.get('https://localhost:7171/api/client/1')
                .then(function (response) {
                    console.log(response.data);
                })
                .catch(function (error) {
                    console.log(error);
                });
        }
    }
})