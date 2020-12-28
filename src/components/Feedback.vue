<template>
      <section class="feedback" id="feedback">
      <div class="container">
        <div class="feedback__title">Свяжитесь с нами по любым вопросам</div>
        <div class="feedback__text">
          Мы всегда рады коллаборациям, интересным проектам и отзывам наших
          клиентов
        </div>
        <form action="#" class="feedback__form form">
          <input
            class="form__input"
            type="text"
            placeholder="Ваше имя"
            required
          />
          <input
            class="form__input"
            type="email"
            placeholder="Ваш email"
            required
          />
          <textarea class="form__textarea" placeholder="Сообщение"></textarea>
          <button class="form__btn btn" type="submit">Отправить</button>
        </form>
      </div>
    </section>
</template>