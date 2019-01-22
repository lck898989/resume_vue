import Vue from 'vue';
import cart from '../../components/cart/cart.vue'
new Vue({
    el   : '#cart',
    data : {
        cart : "I'm a cart.html"
    },
    components : {
        "c-cart" : cart
    }
})