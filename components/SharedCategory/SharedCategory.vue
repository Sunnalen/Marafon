<template>
  <div :class="['category', categorySize[size]]">
    <div class="category__header">
      <div class="category__header-title">
        {{ props.category }}
      </div>
      <div class="category__header-date">
        {{ props.date }}
      </div>
    </div>
    <div class="category__inner">
      <h3 class="category__title">
        {{ props.title }}
      </h3>
      <p class="category__text">
        {{ props.text }}
      </p>
    </div>
  </div>
</template>
<script setup lang="ts">
import type { TCategoryClass, ISharedCategoryProps } from './SharedCategory.types';
  const props = defineProps<ISharedCategoryProps>()

  const categorySize: TCategoryClass = {
    l: 'category__large',
    m: 'category__medium',
    s: 'category__small'
  }
</script>
<style scoped src="./SharedCategory.css"></style>