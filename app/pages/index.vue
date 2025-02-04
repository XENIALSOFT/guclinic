<script setup lang="ts">
// e9edae31ffb9936d198d73629f23ef6c06ef5771acafed253ceef9da9d406463
// ca0c7b8705b446f8e7d7197b3e8e2a6835f54e42ea200a4a000391bfbe57746a
// 1c5128f2928c097e5e3e730f2a44d6aa1cb21db7b7ade5f3344982cc95966e3c
// 74fcc0a3aeac62f8f9a6a2a3921d9eed881ac22c9813501005af41e390b69793
// 5ac403d9a2801c076a31b2270f8325bd98a0ff1da6b82e989c6ea32c4742be01
// d10f491f0b303028005c9645b194c33e0ccc9b3a207625bf34a597224cba8774

const container = useTemplateRef(`swiperContainer`);
// const swiperContainer = ref(null);
const slides = ref([
  {
    src: `/e9edae31ffb9936d198d73629f23ef6c06ef5771acafed253ceef9da9d406463.jpg`,
    alt: `메인배너1`,
  },
  {
    src: `/ca0c7b8705b446f8e7d7197b3e8e2a6835f54e42ea200a4a000391bfbe57746a.jpg`,
    alt: `메인배너2`,
  },
  {
    src: `/1c5128f2928c097e5e3e730f2a44d6aa1cb21db7b7ade5f3344982cc95966e3c.jpg`,
    alt: `메인배너3`,
  },
  {
    src: `/74fcc0a3aeac62f8f9a6a2a3921d9eed881ac22c9813501005af41e390b69793.jpg`,
    alt: `메인배너4`,
  },
  {
    src: `/5ac403d9a2801c076a31b2270f8325bd98a0ff1da6b82e989c6ea32c4742be01.jpg`,
    alt: `메인배너5`,
  },
  {
    src: `/d10f491f0b303028005c9645b194c33e0ccc9b3a207625bf34a597224cba8774.jpg`,
    alt: `메인배너6`,
  },
]);

useSwiper(container as Ref);
</script>

<template>
  <section>
    <ClientOnly>
      <swiper-container
        ref="swiperContainer"
        class="max-w-screen-md"
        :loop="true"
        :autoplay="true"
        :pagination="{
          type: `fraction`,
        }"
      >
        <swiper-slide
          v-for="(slide, index) of slides"
          :key="index"
        >
          <img
            :src="slide.src"
            :alt="slide.alt"
            width="100%"
          >
        </swiper-slide>
      </swiper-container>
    </ClientOnly>
  </section>
  <section class="mt-12">
    <div class="px-5">
      <div class="flex justify-between">
        <h3 class="text-base font-bold">
          최근 한 주간의 베스트 이벤트
        </h3>
        <NuxtLink to="/event">
          <img
            src="~/assets/icons/icon-general-arrow-long-right-black.svg"
            alt="최근 한 주간의 베스트 아이템"
          >
        </NuxtLink>
      </div>
      <h5 class="mt-1 text-xs text-gray-400">
        가장 사랑받은 이벤트만 모았어요.
      </h5>
    </div>
  </section>
</template>

<style>
.swiper-wrapper {
  display: flex;
  flex-direction: column;
}

swiper-slide {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  height: 20vh;
  font-size: 4rem;
  font-weight: bold;
}
</style>
