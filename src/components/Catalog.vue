<template>
  <div class="catalog" id="catalog">
    <div class="catalog__nav">
      <div class="container">
        <ul class="catalog__menu">
          <li v-for="link in menuLinks" :key="link.type">
            <a :class="[{'active-menu': isActive === link.type},'catalog__menu-link']" 
              @click="cardType = link.type, isActive = link.type"
            >
              {{link.text}}
            </a></li>
        </ul>
      </div>
    </div>
    <div class="container">
      <div class="catalog__cards">
        <div class="catalog__card card" v-for="card in currentCards" :key="card.id">
          <div class="card__image">
            <img :src="card.imgSrc" :alt="card.title" />
          </div>
          <div class="card__title">{{card.title}}</div>
          <div class="card__text">{{card.matherial}}</div>
          <div class="card__price">{{card.price}}</div>
          <div class="card__controls">
            <button class="card__like" @click="addToFavorites(card)"></button>
            <button class="card__buy" @click="addToCart(card)"></button>
            </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cardType: '',
      isActive: false,
      menuLinks: [
        {text: 'Футболки', type: 'tshirt'},
        {text: 'Рубашки', type: 'shirt'},
        {text: 'Свитшоты', type: 'hoodey'},
        {text: 'Куртки', type: 'jacket'},
        {text: 'Джинсы', type: 'jeans'},
        {text: 'Обувь', type: 'shoes'},
      ]
    }
  },
  computed: {
    //все карточки
    cards() {
      return this.$store.getters.cards
    },
    //карточки выбранной категории
    currentCards() {
      if (this.cardType === '') {
        return this.cards
      }
      else {
      return this.cards.filter(card => card.type === this.cardType)
      }
    }
  },
  methods: {
    addToCart(card) {
      const newCard = {
        id: card.id,
        title: card.title,
        matherial: card.matherial,
        price: card.price,
        type: card.type,
        imgSrc: card.imgSrc,
      };
      event.target.classList.toggle('trigger'); 
      this.$store.dispatch('addToCart', newCard);
    },
    addToFavorites(card) {
      const newCard = {
        id: card.id,
        title: card.title,
        matherial: card.matherial,
        price: card.price,
        type: card.type,
        imgSrc: card.imgSrc,
      };
      event.target.classList.toggle('trigger');
      this.$store.dispatch('addToFavorites', newCard);
    }
  }
};
</script>

