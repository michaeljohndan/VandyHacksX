<script setup>
    import LogIn from "./LogIn.vue";

    import { ref } from'vue';
    const currentView = ref('createAccount');

    const login = () => {
        currentView.value = 'login';
    };

</script>

<template>
    <div class="login-card-container" v-if="currentView === 'createAccount'">
            <div class="login-card">
                
                <div class="login-card-header">
                    <h1>Join us!</h1>
                    <div>Please login to use the platform</div>
                </div>
                <form class="login-card-form" @submit.prevent="signIn">
                    <div class="form-item">
                    
                        <input type="text" v-model="name" placeholder="Enter Name" 
                        autofocus required>
                    </div>
                    <div class="form-item">
                    
                        <input type="text" v-model="email" placeholder="Enter Email" id="emailForm" 
                        required>
                    </div>
                    <div class="form-item">
    
                        <input type="password" v-model="password" placeholder="Enter Password" id="passwordForm"
                         required>
                    </div>
                    <div class="form-item">
    
                        <input type="password" v-model="reenterPassword" placeholder="Re Enter Password" id="reenterpasswordForm" required>
                    </div>
                    <button type="submit" @click="login">Sign up</button>
                </form>
            </div>
        </div>
        <div v-else-if="currentView === 'login'">
            <LogIn/>
        </div>
    </template>
    
    <script>
    import firebase from "../backend/firebase.js";

    
    
    export default {
    data() {
        return {
            name: "",
            email: "",
            password: "",
            reenterPassword: ""
        };
    },
    methods: {
        async signIn() {
            if (this.password === this.reenterPassword) {
                try {
                    await firebase.createUser(this.email, this.password, this.name);
                    // User signed in.
                }
                catch (error) {
                    // Handle errors.
                    console.error(error);
                }
            }
            else {
                // Passwords do not match - handle this scenario.
                console.log("Passwords do not match");
            }
        }
    }
};
    </script>
    
 
    
    
    
    
    
    <style scoped>
    @import url("../components/reset.css");
    
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap');
    *{
      margin: 0;
      padding: 0;
      font-family: sans-serif;
    }
    
    
    
    .login-card-container {
        font-family: 'Poppins', sans-serif;
        min-height: 100vh;
        background-image: url(../assets/elderly.jpg);
        display: flex;
        justify-content: center;
        align-items: center;
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        width: 100%;
        height: 100vh;
        
    }
    
    
    /* Login Card */
    .login-card {
        width: 450px;
        background: rgba(255, 255, 255, .8);
        padding: 4rem;
        border-radius: 10px;
        position: relative;
    }
    
    .login-card::before {
        content: '';
        position: absolute;
        inset: 0;
        background: rgba(255, 255, 255, .15);
        transform: rotate(-6deg);
        border-radius: 10px;
        z-index: -1;
    }
    /* ---------- */
    
    /* Login Card Logo */
    .login-card-logo {
        margin-bottom: 2rem;
    }
    
    .login-card-logo img {
        width: 60px;
    }
    /* ---------- */
    
    /* Login Card Standard */
    .login-card-logo,
    .login-card-header,
    .login-card-footer {
        text-align: center;
    }
    
    .login-card a {
        text-decoration: none;
        color: #35339a;
    }
    
    .login-card a:hover {
        text-decoration: underline;
    }
    /* ---------- */
    
    /* Login Card Header */
    .login-card-header {
        margin-bottom: 2rem;
    }
    
    .login-card-header h1 {
        font-size: 2rem;
        font-weight: 600;
        margin-bottom: .5rem;
    }
    
    .login-card-header h1+div {
        font-size: calc(1rem * .8);
        opacity: .8;
    }
    /* ---------- */
    
    /* Login Card Form */
    .login-card-form {
        display: flex;
        flex-direction: column;
        gap: 1.5rem;
    }
    
    .login-card-form .form-item {
        position: relative;
    }
    
    .login-card-form .form-item .form-item-icon {
        position: absolute;
        top: .82rem;
        left: 1.4rem;
        font-size: 1.3rem;
        opacity: .4;
    }
    
    .login-card-form .checkbox {
        display: flex;
        align-items: center;
        gap: 7px;
    }
    
    .login-card-form .form-item-other {
        display: flex;
        align-items: center;
        justify-content: space-between;
        font-size: calc(1rem * .8);
        margin-bottom: .5rem;
    }
    /* ---------- */
    
    /* Login Card Footer */
    .login-card-footer {
        margin-top: 1.5rem;
        font-size: calc(1rem * .8);
    }
    /* ---------- */
    
    /* Login Card Form Elements */
    .login-card input[type="text"],
    .login-card input[type="password"],
    .login-card input[type="email"] {
        border: none;
        outline: none;
        background: rgba(255, 255, 255, .3);
        padding: 1rem 1.5rem;
        padding-left: calc(1rem * 3.5);
        border-radius: 100px;
        width: 100%;
        transition: .5s;
    }
    
    .login-card input:focus {
        background: white;
    }
    
    .login-card input[type="checkbox"] {
        width: 16px;
        height: 16px;
        accent-color: black;
    }
    
    .login-card button {
        background: black;
        color: white;
        padding: 1rem;
        border-radius: 100px;
        text-align: center;
        text-transform: uppercase;
        letter-spacing: 2px;
        transition: .5s;
        margin-left: 20%;
    }
    
    .login-card button:hover {
        background-color: rgba(0, 0, 0, 0.85);
        cursor: pointer;
    }
    /* ---------- */
    
    /* Login Card Social Buttons */
    .login-card-social {
        display: flex;
        flex-direction: column;
        gap: 1.5rem;
        text-align: center;
        margin-top: 3rem;
    }
    
    .login-card-social>div {
        opacity: .8;
        text-transform: uppercase;
        letter-spacing: 1px;
        font-size: calc(1rem * .8);
    }
    
    .login-card-social-btns {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 1rem;
    }
    
    .login-card-social-btns a {
        display: flex;
        align-items: center;
        justify-content: center;
        color: black;
        width: 50px;
        height: 50px;
        background-color: rgba(255, 255, 255, .6);
        border-radius: 100px;
        transition: all .5s;
    }
    
    .login-card-social-btns a:hover {
        background-color: white;
        transform: scale(1.1);
    }
    /* ---------- */
    
    
    /* Responsive */
    @media (max-width: 768px) {
    
        body {
            padding: 2rem 0;
        }
    
        .login-card {
            width: 280px;
            padding: 2rem;
        }
    
    }
    </style>