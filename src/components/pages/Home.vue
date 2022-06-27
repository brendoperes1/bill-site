<template>
  <div class="full-page">
    <Header/>
    <div class="market-container">  
      <Market/>
      <div v-if="total != 0">
        <Kart/>
      </div>
    </div>
    <Footer/>
  </div>
</template>

<script>
import Header from '../Header.vue'
import Market from '../Market.vue'
import Footer from '../Footer.vue'
import Kart from '../Kart.vue'

export default {
  name: 'Home',
  components: { Header, Market, Footer, Kart },
    computed: {
        total() {
            return this.$store.state.total
        }
    }
}
</script>

<style scoped>

.full-page{
  background-color: #f1f2f6;
}
.market-container{
  max-width: 1000px;
  margin-left: auto;
  margin-right: auto;
  color: #333;
}
</style>
