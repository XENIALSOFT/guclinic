<template>
  <header class="fixed top-0 z-10 w-full max-w-screen-md bg-white">
    <div class="flex justify-between px-4 py-3">
      <img
        src="~/assets/images/header-logo.svg"
        alt="지유클리닉"
        width="36"
        height="36"
      >
      <div class="flex items-center gap-3">
        <button>
          <img
            src="~/assets/icons/icon-globe.svg"
            alt="언어 변경"
            width="20"
            height="20"
          >
        </button>
        <a href="#!">
          <img
            src="~/assets/icons/icon-service-kakaotalk-black.svg"
            alt="카카오톡 연결"
            width="24"
            height="24"
          >
        </a>
        <a href="#!">
          <img
            src="~/assets/icons/icon-general-call-black.svg"
            alt="전화 연결"
            width="24"
            height="24"
          >
        </a>
        <a href="#!">
          <img
            src="~/assets/icons/icon-general-cart-black.svg"
            alt="장바구니"
            width="24"
            height="24"
          >
        </a>
        <button class="text-sm font-medium">
          로그인
        </button>
      </div>
    </div>
    <TheHeaderNavigation />
  </header>
</template>
