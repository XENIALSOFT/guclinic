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
        class="w-screen max-w-screen-md"
        :loop="true"
        :autoplay="true"
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
  <section class="mt-12">
    <NuxtLink to="/browse">
      <img
        src="/ed2c4745ac695bc025ca5d0afd908918c616c021e85ea5e6afd8604590cf9a4b.png"
        alt="브랜드 스토리 보러가기"
      >
    </NuxtLink>
  </section>
  <section class="mt-12">
    <div class="px-5">
      <div class="flex justify-between">
        <h3 class="text-base font-bold">
          카테고리 인기시술 TOP 5
        </h3>
      </div>
      <h5 class="mt-1 text-xs text-gray-400">
        관심있는 카테고리의 인기시술을 둘러보세요.
      </h5>
    </div>
    <div class="px-5">
      <div class="mt-7 grid grid-cols-4 border-y border-gray-400">
        <div
          v-for="i in 16"
          :key="i"
          class="border-b border-[#edecec] p-4 text-center text-xs font-medium text-gray-400"
        >
          <button>줄기세포시술</button>
        </div>
      </div>
    </div>
  </section>
  <section class="mt-7">
    <div class="flex flex-col gap-4 bg-gray-100 px-6 py-5">
      <h5 class="text-center text-sm">
        원하는 시술을 검색해보세요
      </h5>
      <label class="flex h-10 appearance-none items-center gap-4 bg-white px-4 focus-within:shadow-none focus:shadow-none">
        <input
          type="text"
          class="grow bg-transparent text-xs font-medium"
          placeholder="시술명을 검색해보세요."
        >
        <button>
          <img
            src="~/assets/icons/icon-action-topbar-search-black.svg"
            alt="검색"
            width="16"
            height="16"
          >
        </button>
      </label>
      <div class="flex justify-center gap-4 font-medium text-gray-500">
        <a href="#!">슈링크</a>
        <a href="#!">인모드</a>
        <a href="#!">스타토닝</a>
        <a href="#!">울쎄라</a>
      </div>
    </div>
  </section>
  <section class="my-12">
    <div class="px-5">
      <div class="flex justify-between">
        <h3 class="text-base font-bold">
          지유클리닉 오시는 길
        </h3>
        <NuxtLink to="/event">
          <img
            src="~/assets/icons/icon-general-arrow-long-right-black.svg"
            alt="지유클리닉 오시는 길"
          >
        </NuxtLink>
      </div>
      <p class="mt-1 text-sm ">
        서울특별시 서초구 서초대로77길 54<br>더블유타워 3층, 4층 지유클리닉
      </p>
    </div>
    <div class="mt-7">
      <img
        src="/17cea5ef885ec8bb1271c508eaf1f17bc365d5619aae3b7505f4060bcb493b34.png"
        alt="지유클리닉 지도"
      >
    </div>
  </section>
</template>
