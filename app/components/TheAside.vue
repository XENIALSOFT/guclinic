<template>
  <aside class="fixed left-[calc((100%-768px)/2-768px/2)] hidden h-full w-[344px] px-6 2xl:flex 2xl:flex-col 2xl:justify-center 2xl:gap-y-16">
    <img
      alt="지유클리닉"
      src="/0e2f73e0590aac7a078d79486e3a63c3842571afc2ee3714d5a5d906f9ea7c3f.webp"
      width="150px"
    >
    <div>
      <p class="text-sm text-[#3d3d3b]">
        원하는 시술을 검색해보세요.
      </p>
      <label class="mt-4 flex h-10 appearance-none items-center gap-4 bg-white px-4">
        <input
          type="text"
          class="h-full grow bg-transparent text-xs font-medium focus:outline-none"
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
      <div class="mt-4 flex gap-4 font-medium text-gray-500">
        <a href="#!">슈링크</a>
        <a href="#!">인모드</a>
        <a href="#!">스타토닝</a>
        <a href="#!">울쎄라</a>
      </div>
    </div>
    <div class="absolute bottom-14 flex h-14 items-center justify-between rounded-3xl bg-white">
      <img
        alt="카톡 문의/상담"
        src="~/assets/icons/icon-service-kakaotalk-yellow.svg"
        width="52"
        height="52"
      >
      <span class="px-6 text-sm font-medium tracking-wider">
        카톡 문의/상담
      </span>
    </div>
  </aside>
</template>
