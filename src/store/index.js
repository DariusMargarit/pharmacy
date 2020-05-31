import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {

    shop: [],

    products: [
      {
        title: 'Hairinator1',
        shortDescription: 'Very good product for hair loss',
        longDescription: 'Very good product for hair loss. It\'s made by Doofensmidths and will make your hair grow instantly.',
        image: require('../assets/logoPillSlim.png')
      },
      {
        title: 'Hairinator2',
        shortDescription: 'Very good product for hair loss',
        longDescription: 'Very good product for hair loss. It\'s made by Doofensmidths and will make your hair grow instantly.',
        image: require('../assets/logoPillSlim.png')
      },
      {
        title: 'Hairinator3',
        shortDescription: 'Very good product for hair loss',
        longDescription: 'Very good product for hair loss. It\'s made by Doofensmidths and will make your hair grow instantly.',
        image: require('../assets/logoPillSlim.png')
      },
      {
        title: 'Hairinator4',
        shortDescription: 'Very good product for hair loss',
        longDescription: 'Very good product for hair loss. It\'s made by Doofensmidths and will make your hair grow instantly.',
        image: require('../assets/logoPillSlim.png')
      },
      {
        title: 'Hairinator5',
        shortDescription: 'Very good product for hair loss',
        longDescription: 'Very good product for hair loss. It\'s made by Doofensmidths and will make your hair grow instantly.',
        image: require('../assets/logoPillSlim.png')
      },
      {
        title: 'Hairinator6',
        shortDescription: 'Very good product for hair loss',
        longDescription: 'Very good product for hair loss. It\'s made by Doofensmidths and will make your hair grow instantly.',
        image: require('../assets/logoPillSlim.png')
      },
      {
        title: 'Hairinator7',
        shortDescription: 'Very good product for hair loss',
        longDescription: 'Very good product for hair loss. It\'s made by Doofensmidths and will make your hair grow instantly.',
        image: require('../assets/logoPillSlim.png')
      },
      {
        title: 'Hairinator8',
        shortDescription: 'Very good product for hair loss',
        longDescription: 'Very good product for hair loss. It\'s made by Doofensmidths and will make your hair grow instantly.',
        image: require('../assets/logoPillSlim.png')
      }
    ]
  },
  mutations: {
    addItemInShop(state, item) {
      const index = state.shop.indexOf(item);
      if (index === -1) {
        state.shop.push(item);
      }
    },
    removeItemFromShop(state, item) {
      const index = state.shop.indexOf(item);
      if (index > -1) {
        state.shop.splice(index, 1);
      }
    }
  },
  actions: {
  },
  modules: {
  }
})
