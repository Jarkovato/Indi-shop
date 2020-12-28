<template>
  <div id="app">
    <header class="header">
      <div class="mobile-menu">
        <img src="img/icons/menu.png" alt="Кнопка меню" />
      </div>
      <div class="up-btn">
        <img src="img/icons/up-arrow.png" alt="Кнопка меню" />
      </div>
      <div class="container">
        <div class="header__inner">
          <nav class="header__nav">
            <div class="header__mobile-close">&#10006;</div>
            <ul class="header__menu">
              <li>
                <router-link class="header__link" to="/about">О нас</router-link>
              </li>
              <li>
                <router-link class="header__link" to="/catalog">Каталог</router-link>
              </li>
              <li>
                <router-link class="header__link" to="/showroom">Шоурум</router-link>
              </li>
              <li>
                <router-link class="header__link" to="/contacts">Контакты</router-link>
              </li>
            </ul>
          </nav>
          <router-link tag="a" to="/catalog" class="header__logo">
            <img src="img/logotype1.png" alt="Логотип компании" />
          </router-link>
          <div class="header__contacts">
            <a href="tel:+7999893311" class="header__phone">+7 999 89 33 11</a>
            <router-link tag='a' class="header__like" to="/favorites">Избранное</router-link>
            <router-link tag='a' class="header__cart" to="/cart">Корзина</router-link>
          </div>
          <div class="header__contacts-mobile">
            <a class="mobile-phone" href="tel:+7999893311">
              <img src="img/icons/phone-icon.png" alt="+7 999 89 33 11"/>
            </a>
            <a class="mobile-email" href="#feedback">
              <img src="img/icons/email-icon.png" alt="indishop@yandex.ru"/>
            </a>
            <router-link class="mobile-like" tag='a' to="/favorites">
              <img src="img/icons/like.png" alt="Избранное">
            </router-link>
            <router-link class="mobile-cart" tag='a' to="/cart">
              <img src="img/icons/cart.png" alt="Корзина">
            </router-link>
          </div>
        </div>
      </div>
    </header>
    <router-view/>
    <Feedback/>
    <div class="footer">
      <div class="container">
        <div class="footer__text">Indi Shop 2020, все права защищены</div>
      </div>
    </div>
    
  </div>
</template>

<script>
import Feedback from './components/Feedback'
export default {
  data(){
    return {

    }
  },
  components: {
    Feedback
  }
  
}
</script>

<style lang="scss" scoped>
</style>
