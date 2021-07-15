import axios from "axios";

const state = {
    cartItems: []
}

const mutations = {
    UPDATE_CART_ITEMS(state, payload) {
        state.cartItems = payload;
    }
}

const actions = {
    getCartItems({
        commit
    }) {
        axios.get('https://fast-beach-14713.herokuapp.com/cart').then((response) => {
            commit('UPDATE_CART_ITEMS', response.data)
        }).catch((err) => {
            console.log(err)
        });
    },
    addCartItem({
        commit
    }, cartItem) {
        axios.post('https://fast-beach-14713.herokuapp.com/cart', cartItem).then((response) => {
            commit('UPDATE_CART_ITEMS', response.data)
        }).catch((err) => {
            console.log(err)
        });
    },
    removeCartItem({
        commit
    }, cartItem) {
        axios.delete('https://fast-beach-14713.herokuapp.com/cart/delete', cartItem).then((response) => {
            commit('UPDATE_CART_ITEMS', response.data)
        }).catch((err) => {
            console.log(err)
        });
    },
    removeAllCartItems({
        commit
    }) {
        axios.delete('https://fast-beach-14713.herokuapp.com/cart/delete/all').then((response) => {
            commit('UPDATE_CART_ITEMS', response.data)
        }).catch((err) => {
            console.log(err)
        });
    }
}

const getters = {
    cartItems: state => state.cartItems,
    cartTotal: state => {
        return state.cartItems.reduce((acc, cartItem) => {
            return (cartItem.quantity * cartItem.price) + acc;
        }, 0).toFixed(2);
    },
    cartQuantity: state => {
        return state.cartItems.reduce((acc, cartItem) => {
            return cartItem.quantity + acc;
        }, 0);
    }
}

const cartModule = {
    state,
    mutations,
    actions,
    getters
}
export default cartModule;