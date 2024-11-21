<template>
  <SharedContainer>
    <div class="header">
      <a href="/" class="header__logo">
        <img src="../../assets/images/Logo.png" alt="Logo">
      </a>
      <div class="header__inner">
        <SharedTab 
        v-for="tab in tabs"
        :key="tab"
        :class="['tab', {active: activeTab === tab}]"
        :tab="tab"
        @click="activeTab = tab"
        />
        <SharedSearch />
        <div class="header__phone">
          <nuxt-icon name="Phone" filled />
          +7 (987) 887-87
        </div>
      </div>
    </div>
  </SharedContainer>
</template>
<script setup>
  const tabs = ['Главная', 'О нас', 'Контакты']
  const activeTab = ref('Главная')
</script>
<style scoped src="./AppHeader.css"></style>