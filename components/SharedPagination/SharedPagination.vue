<template>
  <nav class="pagination" role="navigation" aria-label="pagination">
    <ul class="pagination__list">
      <li v-if="currentPage > 1">
        <a 
          class="pagination__link-prev" 
          @click="goToPage(currentPage - 1)"
          aria-label="Previous page"
        >
          <nuxt-icon name="Prev" filled />
          Предыдущая
        </a>
      </li>
      <li v-for="page in visiblePages" :key="page">
        <a 
          class="pagination__link" 
          :class="{ 'is-current': page === currentPage }" 
          @click="goToPage(page)"
        >{{ page }}</a>
      </li>
      <li v-if="currentPage < totalPages">
        <a 
          class="pagination__link-next" 
          @click="goToPage(currentPage + 1)"
          aria-label="Next page"
        >
          Следующая
          <nuxt-icon name="Next" filled />
        </a>
      </li>
    </ul>
  </nav>
</template>

<script setup>
import { computed, defineProps, defineEmits } from 'vue';

const props = defineProps({
  totalPages: {
    type: Number,
    required: true
  },
  currentPage: {
    type: Number,
    required: true
  }
});

const emit = defineEmits();

const visiblePages = computed(() => {
  const pages = [];
  const maxPagesToShow = 4; 
  const range = Math.floor(maxPagesToShow / 3);
  let startPage = Math.max(1, props.currentPage - range);
  let endPage = Math.min(props.totalPages, props.currentPage + range);

  if (endPage - startPage < maxPagesToShow - 1) {
    if (startPage === 1) {
      endPage = Math.min(maxPagesToShow, props.totalPages);
    } else if (endPage === props.totalPages) {
      startPage = Math.max(1, props.totalPages - maxPagesToShow + 1);
    }
  }

  if (startPage > 1) {
    pages.push(1);
    if (startPage > 2) {
      pages.push('...');
    }
  }

  for (let i = startPage; i <= endPage; i++) {
    pages.push(i);
  }

  if (endPage < props.totalPages) {
    if (endPage < props.totalPages - 1) {
      pages.push('...');
    }
    pages.push(props.totalPages);
  }

  return pages;
});

const goToPage = (page) => {
  if (page === '...') return;
  if (page < 1 || page > props.totalPages) return;
  emit('page-changed', page);
};
</script>

<style scoped src="./SharedPagination.css"></style>
