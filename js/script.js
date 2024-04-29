const { createApp } = Vue

createApp({
    data() {
        return {
            // array dove pushare le email generate
            emails: []
        }
    },
    methods: {
        takeEmails() {
            // ciclo for per reperire 10 email e pusharle 
            for (let i = 0; i < 10; i++) {
                axios
                    .get('https://flynn.boolean.careers/exercises/api/random/mail')
                    .then((resp) => {
                        this.emails.push(resp.data.response);
                    })
            }
        }
    },
    created() {
        this.takeEmails();
    }
}).mount('#app');