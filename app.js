const app = Vue.createApp({    
    data(){
        return {
            firstName:'Anirban',
            lastName:'Seth',
            emailId:'anirban54321@gmail.com',
            gender:'male',
            phone:'8877445566',
            image:'https://randomuser.me/api/portraits/men/11.jpg'
        }
    },
    methods:{
        async getUser(){
            //console.log(this.firstName);

            const res=await fetch('https://www.randomuser.me/api');
            const data= await res.json();

            //console.log(data.results[0]);

            //console.log(data.results[0].name.first);

            this.firstName=data.results[0].name.first
            this.lastName=data.results[0].name.last
            this.emailId=data.results[0].email
            this.gender=data.results[0].gender
            this.phone=data.results[0].phone
            this.image=data.results[0].picture.large
        }
    },
})

app.mount('#app')