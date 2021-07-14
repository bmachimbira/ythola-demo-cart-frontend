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
        axios.get(`https://belle-livre-48148.herokuapp.com/products`).then((response) => {
            commit('UPDATE_PRODUCT_ITEMS', response.data)
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