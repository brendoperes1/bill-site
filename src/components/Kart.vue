<template>
    <div class="kart-content">
        <span class="kart-title">Your Receipt</span>
        <div class="kart-products">
            <table>
                <tbody>
                    <tr v-for="produto in produtos" :key="produto.id">
                        <td style="text-align: left;">{{ produto.name }}</td>
                        <td>x{{ produto.amount }}</td>
                        <td style="color: #24c486;"><strong>{{produto.price | dinheiro}}</strong></td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div class="kart-line">
            <hr>
        </div>
        <div class="kart-total">
            <span class="kart-total-text">Total:</span>
            <span class="kart-total-value"><strong>{{total | dinheiro}}</strong></span>
        </div>
    </div>
</template>

<script>

export default {
    data() {
        return {
           
        } 
    },
    computed: {
        produtos() {
            return this.$store.state.produtos
        },
        total() {
            return this.$store.state.total
        },
    }
}
</script>

<style scoped>
th, td {
  padding-top: 3px;
  padding-left: 17px;
  padding-right: 21px;
}
.kart-title{
    font-size: 28px;
    padding: 15px 15px 25px;
    font-weight: 700;
    margin-bottom: 20px;
}
.kart-content {
    background-color: #fff;
    text-align: center;
    max-width: 100%;
    font-size: 18px;
    padding: 15px 15px 30px;
    margin-top: 10px;
}
.kart-products{
    display: flex;
    justify-content: center;
    padding-top: 30px;
}
.kart-line{
    margin: 0 auto;
    max-width: 300px;
}
.kart-total{
    margin: 0 auto;
    max-width: 300px;
    display: flex;
    justify-content: space-between;
}
.kart-total-value{
    color: #24c486;
}
</style>