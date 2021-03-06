import axios from 'axios';
const state = {
    productItems: []
}

const mutations = {
    UPDATE_PRODUCT_ITEMS(state, payload) {
        state.productItems = payload;
    }
}

const actions = {
    getProductItems({
        commit
    }) { 
        axios.get('https://fast-beach-14713.herokuapp.com/products').then((response) => {
            commit('UPDATE_PRODUCT_ITEMS', response.data)
        }).catch((err) => {
            console.log(err)
        });
    }
}

const getters = {
    productItems: state => state.productItems,
    productItemById: (state) => (id) => {
        return state.productItems.find(productItem => productItem.id === id)
    }
}

const productModule = {
    state,
    mutations,
    actions,
    getters
}

export default productModule;