var app = new Vue({
    el: '#app',
    data: {
        alert: {
            success: [],
            errors: []
        },
        client: {
            id: '',
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

            axios.put(WEBAPI_HOSTNAME + 'client', this.client)
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
    },
    beforeMount() {
        var urlParams = new URLSearchParams(window.location.search);
        var id = urlParams.get('id');

        var client = this.client;
        axios.get(WEBAPI_HOSTNAME + 'client/' + id)
            .then(function (response) {
                client.id = response.data.value.id;
                client.name = response.data.value.name;
                client.email = response.data.value.email;
                client.birthday = response.data.value.birthday;
                client.cep = response.data.value.cep;
            })
            .catch(function (error) {
                console.log(error);
            });
    }
})