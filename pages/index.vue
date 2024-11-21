<template>
  <AppHeader />
  <img class="background" src="../assets/images/Background.png" alt="Background">
  <SharedContainer>
    <div class="main__inner">
      <div class="category__items">
        <div class="category__item">
          <SharedCategory
            category="Категория 1"
            date="13 дек 2020"
            title="Управление ИТ-активами – скучная рутина или творческая задача?"
            text="Размышляя об управлении ИТ-активами, я вспомнил один учебный пример. Менеджер по ИТ-мощностям в крупной компании периодически готовил толстенный отчёт руководству. В очередной раз он не принёс отчёт, решив проверить, нужен ли он вообще. "
            size="m"
          />
        </div>
        <div class="category__item">
          <SharedCategory
            category="Категория 1"
            date="13 дек 2020"
            title="Управление ИТ-активами – скучная рутина или творческая задача?"
            text="Размышляя об управлении ИТ-активами, я вспомнил один учебный пример. Менеджер по ИТ-мощностям в крупной компании периодически готовил толстенный отчёт руководству. В очередной раз он не принёс отчёт, решив проверить, нужен ли он вообще. " 
            size="l"
          />
          <SharedCard
          category="Категория 1"
          title="ITAM&SAMDay – самая настоящая удача!"
          date="13 дек 2020"
          />
        </div>
        <div class="category__item">
          <SharedCard
          category="Очень длинная категория 2"
          title="ITAM&SAMDay – самая настоящая удача!"
          date="13 дек 2020"
          :background="backgroundImage"
          background__category="var(--light-gray)"
          />
          <div class="category__item-inner">
            <SharedCategory
            category="Категория 1"
            date="13 дек 2020"
            title="Управление ИТ-активами – скучная рутина или творческая задача слово слово и еще длинное слово после чего ..."
            size="s"
          />
          <SharedCategory
            category="Категория 1"
            date="13 дек 2020"
            title="ITAM&SAMDay – самая настоящая удача!"
            size="s"
          />
          </div>
        </div>
        <div class="category__item">
          <SharedCategory
            category="Категория 1"
            title="Управление ИТ-активами – скучная рутина или творческая задача?"
            text="Размышляя об управлении ИТ-активами, я вспомнил один учебный пример. Менеджер по ИТ-мощностям в крупной компании периодически готовил толстенный отчёт руководству. В очередной раз он не принёс отчёт, решив проверить, нужен ли он вообще. "
            date="13 дек 2020"
            size="l"
          />
          <SharedCard
            category="Очень длинная категория 2"
            title="ITAM&SAMDay – самая настоящая удача!"
            date="13 дек 2020"
          />
        </div>
        <div class="category__item">
          <SharedCard
            category="Категория 1"
            title="Управление ИТ-активами – скучная рутина или творческая задача?"
            date="13 дек 2020"
            :background="backgroundImage1"
            background__category="var(--light-gray)"
            />
            <div class="category__item-inner">
              <SharedCategory
              category="Категория 1"
              date="13 дек 2020"
              title="Управление ИТ-активами – скучная рутина или творческая задача слово слово и еще длинное слово после чего ..."
              size="s"
            />
            <SharedCategory
              category="Категория 1"
              date="13 дек 2020"
              title="ITAM&SAMDay – самая настоящая удача!"
              size="s"
            />
            </div>
        </div>
        <div class="category__pagination">
          <SharedPagination
            :totalPages="totalPages"
            :currentPage="currentPage"
            @page-changed="onPageChanged"
          />
        </div>
        <div class="show__more">
          <button class="show__more-btn">
            Показать еще 6
            <nuxt-icon name="Refresh" filled />
          </button>
        </div>
      </div>
      <div class="news">
        <h3 class="news__title">Популярные новости</h3>
        <div class="news__inner">
          <SharedNews
            v-for="newsItem in news"
            :key="newsItem"
            :newsItem="newsItem"
          />
        </div>
        <SharedSubscribes />
      </div>
    </div>
  </SharedContainer>
  <AppFooter />
</template>
<script setup>
  import backgroundImage from '../../assets/images/Background__card.png';
  import backgroundImage1 from '../../assets/images/Background__card2.png';

  const news = reactive ([
    {
      title: 'ITAM&SAMDay – самая настоящая удача!',
      date: '13 дек 2020'
    },
    {
      title: 'Секреты лицензирования. Всё, что вы хотели знать про Microsoft, SAP и Oracle, но не знали, у кого спросить ...',
      date: '10 дек 2020'
    },
    {
      title: 'Менеджмент XXI века. Надо ли готовиться к изменениям или мы давно уже должны были измениться?',
      date: '5 дек 2020'
    }
  ])

  const currentPage = ref(1)
  const totalPages = ref(10)

  const onPageChanged = (page) => {
  currentPage.value = page;
  };
</script>
<style scoped>
  .background {
    max-height: 300px;
    height: 100%;
    width: 100%;
  }

  .main__inner {
    display: flex;
    gap: var(--gap-l);
  }

  .category__items {
    margin-top: var(--gap-l);
  }
  .category__item {
    display: flex;
    gap: var(--gap-l);
  }

  @media (max-width: 320px) {
    .category__item {
      flex-direction: column;
      gap: 0;
    }
  }

  .category__item-inner {
    width: 100%;
  }

  .category__pagination {
    margin-top: 40px;
    margin-bottom: 100px;
  }

  .news {
    margin-top: var(--gap-l);
  }

  .news__title {
    font-size: var(--font-size-l);
    font-weight: var(--font-weight-bold);
    margin-bottom: var(--gap-m);
  }

  .news__inner {
    display: flex;
    flex-direction: column;
    gap: var(--gap-s);
    margin-bottom: var(--gap-l);
  }

  .show__more {
    display: none;
    width: 280px;
  }



  @media (max-width: 1024px) {
    .main__inner {
      flex-direction: column;
    }

    .news {
      margin-top: 0;
    }

    .news__inner {
      flex-direction: row;
      margin-bottom: 60px;
    }
  }

  @media (max-width: 320px) {
    .news__inner {
      flex-direction: column;
    }

    .category__pagination {
      display: none;
    }

    .show__more {
      display: block;
      width: 280px;
      height: 50px;
    }

    .show__more-btn {
      width: 100%;
      height: 100%;
      background-color: var(--blue);
      color: var(--white);
      border-radius: 20px;
      border: transparent;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 10px;
      font-family: 'Futura PT';
      font-size: var(--font-size-m);
      font-weight: var(--font-weight-regular);
    }

    .show__more-btn:hover {
      background-color:#4A5EC5;
    }

    .show__more-btn:active {
      transform: scale(0.95);
      background-color:#3C4DA8;
    }
  }
</style>