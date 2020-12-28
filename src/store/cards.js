import 'core-js/es/array'

export default {
  state: {
    cards: [
      {
        id: 1,
        title: "Футболка Blacky из хлопка",
        matherial: "Хлопок 100%",
        price: "999 р.",
        type: "tshirt",
        imgSrc: "img/tshirts/black-t-shirt.png",
      },
      {
        id: 2,
        title: "Футболка Ready из хлопка",
        matherial: "Хлопок 100%",
        price: "999 р.",
        type: "tshirt",
        imgSrc: "img/tshirts/red-t-shirt.png",
      },
      {
        id: 3,
        title: "Футболка Whiteen из хлопка",
        matherial: "Хлопок 100%",
        price: "999 р.",
        type: "tshirt",
        imgSrc: "img/tshirts/white-t-shirt.png",
      },
      {
        id: 4,
        title: "Джемпер Colors из хлопка",
        matherial: "Хлопок 100%",
        price: "1999 р.",
        type: "hoodey",
        imgSrc: "img/tshirts/t-shirt-color.png",
      },
      {
        id: 5,
        title: "Джемпер Robby из хлопка",
        matherial: "Хлопок 100%",
        price: "1999 р.",
        type: "hoodey",
        imgSrc: "img/jackets/jackets-4.png",
      },
      {
        id: 6,
        title: "Рубашка Greyon из хлопка",
        matherial: "Хлопок 100%",
        price: "1499 р.",
        type: "shirt",
        imgSrc: "img/shirts/shirt-1.png",
      },
      {
        id: 7,
        title: "Рубашка Pinky из хлопка",
        matherial: "Хлопок 100%",
        price: "1499 р.",
        type: "shirt",
        imgSrc: "img/shirts/shirt-2.png",
      },
      {
        id: 8,
        title: "Рубашка Aqua из хлопка",
        matherial: "Хлопок 100%",
        price: "1499 р.",
        type: "shirt",
        imgSrc: "img/shirts/shirt-3.png",
      },
      {
        id: 9,
        title: "Рубашка Beardman из хлопка",
        matherial: "Хлопок 100%",
        price: "1499 р.",
        type: "shirt",
        imgSrc: "img/shirts/shirt-4.png",
      },
      {
        id: 10,
        title: "Куртка Hard Rock из кожи",
        matherial: "Кожа 100%",
        price: "6999 р.",
        type: "jacket",
        imgSrc: "img/jackets/jackets-1.png",
      },
      {
        id: 11,
        title: "Куртка Ozzy из кожи",
        matherial: "Кожа 100%",
        price: "6999 р.",
        type: "jacket",
        imgSrc: "img/jackets/jackets-2.png",
      },
      {
        id: 12,
        title: "Куртка Grylls из таскана",
        matherial: "Таскан 100%",
        price: "5999 р.",
        type: "jacket",
        imgSrc: "img/jackets/jackets-3.png",
      },
      {
        id: 13,
        title: "Джинсы Regular из хлопка",
        matherial: "Хлопок 100%",
        price: "2999 р.",
        type: "jeans",
        imgSrc: "img/jeans/jeans-1.png",
      },
      {
        id: 14,
        title: "Джинсы Pure из хлопка",
        matherial: "Хлопок 100%",
        price: "2999 р.",
        type: "jeans",
        imgSrc: "img/jeans/jeans-2.png",
      },
      {
        id: 15,
        title: "Джинсы Classic из хлопка",
        matherial: "Хлопок 100%",
        price: "2999 р.",
        type: "jeans",
        imgSrc: "img/jeans/jeans-3.png",
      },
      {
        id: 17,
        title: "Джинсы Cowboy из хлопка",
        matherial: "Хлопок 100%",
        price: "2999 р.",
        type: "jeans",
        imgSrc: "img/jeans/jeans-5.png",
      },
      {
        id: 18,
        title: "Ботинки Blacks из кожи",
        matherial: "Кожа 100%",
        price: "3999 р.",
        type: "shoes",
        imgSrc: "img/shoes/shoes-1.png",
      },
      {
        id: 19,
        title: "Ботинки Bots из кожи",
        matherial: "Кожа 100%",
        price: "3999 р.",
        type: "shoes",
        imgSrc: "img/shoes/shoes-2.png",
      },
    ],
    favorites: [],
    cart: []
  },
  mutations: {
    ADD_TO_CART(state, payload) {
      if (state.cart.find(f => f.id === payload.id) === undefined) {
        state.cart.push(payload);
       } else {
         alert('Товар уже добавлен в корзину');
       }  
    },
    DELETE_FROM_CART(state, payload) {
      const cart = state.cart.filter(f => f.id != payload.id);
      state.cart = cart;
    }
    ,
    ADD_TO_FAVORITES(state, payload) {
      if (state.favorites.find(f => f.id === payload.id) === undefined) {
       state.favorites.push(payload);
      } else {
        alert('Товар уже добавлен в избранное');
      }   
    },
    DELETE_FROM_FAVORITES(state, payload) {
      const favorites = state.favorites.filter(f => f.id != payload.id);
      state.favorites = favorites;
    }
  },
  actions: {
    addToCart({commit}, payload) {
      commit('ADD_TO_CART', payload)
    },
    deleteFromCart({commit}, payload) {
      commit('DELETE_FROM_CART', payload)
    },
    addToFavorites({commit}, payload) {
      commit('ADD_TO_FAVORITES', payload)
    },
    deleteFromFavorites({commit}, payload) {
      commit('DELETE_FROM_FAVORITES', payload)
    }
  },
  getters: {
    cards(state) {
      return state.cards
    },
    favorites(state) {
      return state.favorites
    },
    cart(state) {
      return state.cart
    },
    cartLength(state) {
      return state.cart.length
    },
    favoritesLength(state) {
      return state.favorites.length
    },
    
  }
}