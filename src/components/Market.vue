<template>
    <div class="market-content">
        <div class="card-bill">
            <img alt="Vue logo" src="../assets/billgates.jpg" width="125px" height="125px" >
            <span class="card-title">Spend Bill Gates' Money</span>
        </div>
        <div class="money-bar">
            <Animated :number="(this.billsMoney)"></Animated>
        </div>
        <div class="card-test">
            <Card/>
        </div>
    </div>
</template>

<script>
import Card from "./Card.vue";
import Animated from "./Animated.vue";

export default {
    components: { Card, Animated },
    data() {
        return {
            n: 1,
        } 
    },
    computed: {
        billsMoney() {
            return this.$store.state.billsMoney
        }
    },
}

</script>

<style scoped>
img{
    border-radius: 50%;
}

.card-bill {
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 32px;
    background: #fff;
    padding: 30px 20px;
    margin-bottom: 10px;
    font-weight: 700;
    text-align: center;
    line-height: 1.3em;
}
.card-title{
    margin-top: 20px;
}
.money-bar {
    color: #fff;
    background-color: #2ecc71;
    background: linear-gradient(180deg,#2ecc71,#1abc9c);
    padding: 20px;
    margin: 10px 0;
    font-family: Roboto,sans-serif;
    font-size: 32px;
    font-weight: 700;
    text-align: center;
    top: 0;
    position: sticky;
    z-index: 9999;
}
.card-test{
    
}

</style>