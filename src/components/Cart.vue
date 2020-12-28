<template>
  <div class="div">
    <section class="cart" id="cart">
      <div class="container">
        <div class="cart__title title">Корзина</div>
        <div class="fav-cart-desc" v-if="!isEmpty">В корзине пока нет товаров, вы можете добавить любой товар из
         <router-link class="fav-cart-desc__link" to="/catalog">каталога</router-link>
      </div>
        <div class="cart__cards">
          <div class="cart-card" v-for="card in cart" :key="card.id">
            <div class="cart-card__image">
              <img :src="card.imgSrc" :alt="card.title" />
            </div>
            <div class="cart-card__title">{{ card.title }}</div>
            <div class="cart-card__text">{{ card.matherial }}</div>
            <div class="cart-card__price">{{ card.price }}</div>
            <div class="cart-card__controls">
              <button class="card__delete" @click="deleteFromCart(card)">
              </button>
            </div>
          </div>
        </div>
        <div class="cart__controls" v-if="this.cart.length">
          <button class="btn cart__btn">Оформить заказ</button>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      empty: true,
    }
  },
  computed: {
    cart(){
      return this.$store.getters.cart;
    },
    isEmpty() {
      return this.$store.getters.cartLength;
    }
  },
  methods: {
    deleteFromCart(card) {
      this.$store.dispatch('deleteFromCart', card);
    }
  }
}
</script>