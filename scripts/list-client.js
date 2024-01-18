var app = new Vue({
    el: '#app',
    data: {
        filter: '',
        clients: []
    },
    methods: {
        deleteClient: function (id) {
            if (confirm("Delete?") == true) {
                axios.delete(WEBAPI_HOSTNAME + 'client/' + id)
                    .then(function (response) {
                        location.reload();
                    })
                    .catch(function (error) {
                        console.log(error);
                    });
                }
        }
    },
    computed: {
        itemsFiltred() {
            return this.clients.filter(item => item.name.includes(this.filter) || item.email.includes(this.filter) || item.cep.includes(this.filter));
        }
      }
    ,
    beforeMount() {
        var clients = this.clients;
        axios.get(WEBAPI_HOSTNAME + 'client')
            .then(function (response) {
                response.data.value.forEach(element => {
                    clients.push(element);
                });
            })
            .catch(function (error) {
                console.log(error);
            });
    }
})