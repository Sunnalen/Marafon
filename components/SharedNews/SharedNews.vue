<template>
  <div class="news__item">
    <div class="news__item-inner">
      <h3 class="news__item-title">{{ props.newsItem.title }}</h3>
      <p class="news__item-date">{{ props.newsItem.date }}</p>
    </div>
  </div>
</template>
<script setup lang="ts">
  import type { ISharedNewsProps } from './SharedNews.types';

  const props = defineProps<{newsItem: ISharedNewsProps}>()
</script>
<style scoped src="./SharedNews.css"></style>