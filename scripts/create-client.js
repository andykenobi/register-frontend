var app = new Vue({
    el: '#app',
    data: {
        alert: {
            success: [],
            errors: []
        },
        client: {
            name: '',
            email: '',
            birthday: '',
            cep: '',
        }
    },

    methods: {
        submit: function () {
            this.alert.success = [];
            this.alert.errors = [];

            axios.post(WEBAPI_NAME + 'client', this.client)
                .then((response) => {
                    this.alert.success.push('Client created.');
                    window.location = "../index.html";
                })
                .catch((error) => {
                    error.response.data.errors.forEach(element => {
                        this.alert.errors.push(element);
                })
            });
        }
    }
})