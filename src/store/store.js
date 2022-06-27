import Vue from 'vue'
import Vuex from 'vuex'
import products from '../helper.json'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        products: products,
        billsMoney: 100000000000,
        produtos: [],
        total: 0
    },
    mutations: {
        //outra abordagem seria ter uma mutation pra cada ação, ou seja, cada botão no componente "card"
        //chamaria uma função, a de 'buy' chamaria uma 'incBillsMoney' somando apenas uma vez o price e
        //a de 'sell' fazendo a mesma coisa, porém, subtraindo apenas uma vez o price no valor total
        updateMoney(state, payload){
            state.produtos = [];
            let aux = 0
            payload.items.forEach(e => {
                if(e.amount != 0){
                    state.produtos.push(e)
                }
                aux += e.amount * e.price
            });
            state.billsMoney = 100000000000 - aux;
            state.total = aux;
        },
    },
    actions: {
        addProduct(context, payload) {
            context.commit('subBillsMoney', payload)
            
        },
        removeProduct(context, payload) {
            context.commit('incBillsMoney', payload)
        },
        updateMoney(context, payload){
            context.commit('updateMoney', payload)
        },
        
    }
})