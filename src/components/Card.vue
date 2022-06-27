<template>
    <div class="contaienr">
        <div class="card" v-for="product in products.items" :key="product.id">
            <div class="card-img">
                <img alt="Vue logo" :src="require(`@/assets/${product.image}.jpg`)" height="120px">
            </div>
            <div class="card-name">
                <span>{{product.name}}</span>
            </div>
            <div class="card-price">
                <span>$ {{product.price}}</span>
            </div>
            <div class="card-footer">     
                <button :class="product.amount > 0 ? 'card-footer-sell-red' : 'card-footer-sell'" @click="sell(product)">Sell</button>
                <input type="number" min="0" max="30" oninput="this.value = Math.min(this.value, 30)" 
                    class="card-footer-input" v-model="product.amount" @input="triggerInput(products)">
                <button type="button" :disabled="product.amount > 29" 
                    :class="product.amount > 29 ? 'card-footer-buy-disabled' : 'card-footer-buy'" @click="buy(product)">Buy</button>  
            </div>
        </div>
    </div>
</template>

<script>
import products from '../helper.json'
import {mapActions} from 'vuex'

export default {
    data(){
        return {
            products: products,
            oldValue: null
        }
    },
    methods: {
        ...mapActions(['addProduct', 'removeProduct', 'updateMoney']),
        triggerInput(products){
            this.updateMoney(products);    
        },
        buy(product){
            if(product.amount < 30){
                product.amount = parseInt(product.amount) + 1
                this.updateMoney(products);
            }
        },
        sell(product){
            if(product.amount > 0){
                product.amount = parseInt(product.amount) - 1
                this.updateMoney(products);
            }
        }
    }
    
}
</script>

<style scoped>

.contaienr {
    display: flex;
    gap: 10px 10px;
    flex-wrap: wrap;
    flex-direction: row;
}
.card {
    max-width: 100%; 
    background-color: #fff;
    text-align: center;
    font-size: 18px;
    padding: 20px 15px;
    width: 100%;
    flex: 2 0 22%;
}
.card-img{
    display: block;
    margin: 15px auto;
    height: 120px;
    max-width: 100%;
}
.card-name{
    font-size: 22px;
    font-weight: 700;
}
.card-price{
    font-size: 20px;
    color: #24c486;
}
.card-footer{
    display: flex;
    justify-content: center;
    font-size: 20px;
    font-weight: 700;
    display: grid;
    grid-template-columns: repeat(3,1fr);
    grid-gap: 10px 10px;
    margin-top: 25px;
}
.card-footer-sell-red{
    background: red!important;
    border: none;
    color: #fff;
    cursor: auto;
    touch-action: manipulation;
    cursor: pointer;
    padding: 10px 12px;
    border-radius: 3px;
    border: none;
    font-weight: 700;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    touch-action: manipulation;

}
.card-footer-sell{
    background: #f1f2f6!important;
    border: none;
    color: #333;
    cursor: auto;
    touch-action: manipulation;
    cursor: pointer;
    padding: 10px 12px;
    border-radius: 3px;
    border: none;
    font-weight: 700;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    touch-action: manipulation;
}
.card-footer-input{
    font-size: 16px;
    text-align: center;
    border-radius: 3px;
    margin-left: -3px;
    border: 1px solid #b2bec3;
    color: #333;
    width: 100%;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
}
.card-footer-buy-disabled{
    background: #f1f2f6!important;
    border: none;
    color: #333;
    cursor: auto;
    touch-action: manipulation;
}
.card-footer-buy{
    cursor: pointer;
    padding: 10px 12px;
    border-radius: 3px;
    color: #fff;
    border: none;
    font-weight: 700;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    touch-action: manipulation;
    background: linear-gradient(180deg,#2ecc71,#1abc9c);
}
</style>