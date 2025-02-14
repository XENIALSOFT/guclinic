<script setup lang="ts">
const items = ref<{
  title: string;
  image: string;
  desc: string;
  amount: number;
  price: {
    min: number;
    max?: number;
  };
  finished: string;
}[]>([
  {
    title: `실펌X`,
    image: `/8fdfe42be49730793037d4b7697219932ee8ff3818bc9f267a427f81a51302e9.webp`,
    desc: `실펌엑스는 고주파(RF)와 마이크로 니들링이 결합된 침습 시술입니다. 0.3mm~4.0mm의 깊이 조절이 가능한 마이크로 니들로 상태와 증상에 따라 원하는 피부층을 정확히 타겟하여 피부에 40~60ºc의 고주파 열 에너지를 전달합니다.`,
    amount: 7,
    price: {
      min: 250000,
      max: 1590000,
    },
    finished: '2025-06-30',
  },
  {
    title: `위고비`,
    image: `/8e05c3624958a1cfbf7323d8a72283e0b10762dd7dab06f6852553975a11bb55.webp`,
    desc: `꿈의 다이어트약이라 불리는 세마글루타이드 기반 비만치료제 위고비\r\n지유에 런칭하다!\r\n\r\n※ 안전한 다이어트를 위해 반드시 의사와 상담 후 처방이 가능해요.`,
    amount: 1,
    price: {
      min: 800000,
    },
    finished: '2025-06-30',
  },
  {
    title: `볼링크`,
    image: `/332bdfa89f24f73ed8d1f4edb477f8ca28514c3709effa1fa3125f60bbbbce8e.webp`,
    desc: `볼링크는 모노폴라 고주파 볼뉴머로 콜라겐을 채워주고 고강도 집속 초음파 슈링크 유니버스로 빈틈없이 당겨주는 프리미엄 듀얼 리프팅 시술입니다. 콜라겐 재생, 탄력과 볼륨 개선, 얼굴 윤곽 개선등의 효과를 기대할 수 있습니다.`,
    amount: 2,
    price: {
      min: 390000,
      max: 690000,
    },
    finished: '2025-06-30',
  },
]);

function format(str: string) {
  return str.substring(5).replace('-', '/');
}

function diff(str: string) {
  const diff_ms = new Date(str).getTime() - Date.now();
  const diff_days = diff_ms / (1000 * 60 * 60 * 24);
  return Math.floor(diff_days);
}
</script>

<template>
  <div class="flex flex-col gap-y-12 px-5 py-8">
    <div
      v-for="(item, index) of items"
      :key="index"
      class="overflow-hidden rounded-lg"
    >
      <div class="h-32">
        <img
          alt="실펌X"
          :src="item.image"
          class="h-full object-cover"
          width="100%"
        >
      </div>
      <div class="relative flex flex-col gap-y-8 bg-gray-100 p-6">
        <span class="fond-bold absolute -top-2.5 h-5 content-center bg-[#9d8077] px-1 text-xs text-white">
          EVENT
        </span>
        <div class="flex justify-between">
          <div class="max-w-56">
            <dt class="text-sm font-bold">
              {{ item.title }}
            </dt>
            <dl class="mt-2 whitespace-break-spaces text-xs font-medium text-gray-400">
              {{ item.desc }}
            </dl>
          </div>
          <span class="text-xs text-[#9d8077]">
            {{ item.amount }} 개의 상품
          </span>
        </div>
        <div class="flex items-end justify-between">
          <div class="flex flex-col font-medium">
            <span class="mb-1.5 text-[10px] text-[#9d8077] md:text-xs">
              ~  {{ format(item.finished) }} ({{ diff(item.finished) }}일남음)
            </span>
            <span class="text-gray-700">
              <span class="text-base md:text-lg lg:text-xl">
                {{ Intl.NumberFormat(`ko-KR`).format(item.price.min) }}
                <template v-if="item.price.max">
                  ~
                  {{ Intl.NumberFormat(`ko-KR`).format(item.price.max) }}
                </template>
              </span>
              <span class="text-xs">
                원
              </span>
            </span>
          </div>
          <NuxtLink
            to="/appointment"
            class="flex h-8 items-center rounded-full bg-black px-4"
          >
            <span class="text-xs text-white">
              더보기
            </span>
            <img
              alt="더보기"
              src="~/assets/icons/icon-general-arrow-right.svg"
              width="16"
            >
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>
