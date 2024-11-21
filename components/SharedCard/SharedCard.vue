<template>
  <div class="card" :style="cardStyle">
    <div class="card__inner">
      <p class="card__category" :style="`background-color: ${props.background__category}`" >{{ props.category }}</p>
      <h3 class="card__title">{{ props.title }}</h3>
      <p class="card__date">{{ props.date }}</p>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  category: {
    type: String,
    default: ''
  },
  title: {
    type: String,
    default: ''
  },
  date: {
    type: String,
    default: ''
  },
  background: {
    type: String,
    default:''
  },
  background__category: {
    type: String,
    default:'var(--light-blue)'
  }

})
const cardStyle = computed(() => {
  return props.background ? `background: url(${props.background}) no-repeat center center / cover;` : 'background-color: var(--blue);'
})
</script>

<style scoped src="./SharedCard.css"></style>
