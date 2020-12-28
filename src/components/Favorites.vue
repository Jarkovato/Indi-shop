<template>
  <div class="div">
    <section class="favorites" id="favorites">
    <div class="container">
      <div class="favourites__title title">Избранное</div>
      <div class="fav-cart-desc" v-if="!isEmpty">В избранном пока нет товаров, вы можете добавить любой товар из
         <router-link class="fav-cart-desc__link" to="/catalog">каталога</router-link>
      </div>
      <div class="catalog__cards" v-else>
        <div class="catalog__card card" v-for="card in favorites" :key="card.id">
          <div class="card__image">
            <img :src="card.imgSrc" :alt="card.title" />
          </div>
          <div class="card__title">{{card.title}}</div>
          <div class="card__text">{{card.matherial}}</div>
          <div class="card__price">{{card.price}}</div>
          <div class="card__controls">
            <button class="card__delete" @click="deleteFromFavorites(card)"></button>
            <button class="card__buy" @click="addToCart(card)"></button>
            </div>
        </div>
      </div>
    </div>
  </section>
  </div>
</template>

<script>
export default {
  computed: {
    favorites() {
      return this.$store.getters.favorites
    },
    isEmpty() {
      return this.$store.getters.favoritesLength;
    }
  },
  methods: {
    deleteFromFavorites(card) {
      this.$store.dispatch('deleteFromFavorites', card);
    },
    addToCart(card) {
      const newCard = {
        id: card.id,
        title: card.title,
        matherial: card.matherial,
        price: card.price,
        type: card.type,
        imgSrc: card.imgSrc,
      }
      event.target.classList.toggle('trigger');
      this.$store.dispatch('addToCart', newCard)
    },
  }
}
</script>

