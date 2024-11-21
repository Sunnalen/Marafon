<template>
  <div class="subscribes">
    <div class="subscribes__inner">
      <div class="subscribes__title">
        <h3>Подписка на рассылку</h3>
      </div>
      <div class="subscribes__form">
        <input type="mail" class="subscribes__input" placeholder="Email@gmail.com">
        <button class="subscribes__btn">
          Подписаться
          <nuxt-icon name="Accept" filled />
        </button>
      </div>
    </div>
  </div>
</template>
<style scoped src="./SharedSubscribes.css"></style>