<script setup lang="ts">
const populars = ref([
  '줄기세포시술',
  '인기시술',
  '기능의학(수액치료)',
  '레이저리프팅',
  '실리프팅',
  '필러',
  '보톡스',
  '얼굴윤곽/체형관리',
  '콜라겐/스킨부스터',
  '피부관리/여드름',
  '색소/점/문신',
  '프리미엄 색소/점/문신',
  '흉터/모공/탄력',
  '제모',
  '예방접종',
  '프리미엄 시술',
  'Foreigner',
]);

const items = ref<{
  title: string;
  desc: string;
  amount: number;
  price: {
    min: number;
    max: number;
  };
}[]>([
  {
    title: `지방줄기세포`,
    desc: `줄기세포 시술 중 가장 세포수가 많고 다른 세포 연골이나 뼈, 피부세포 등으로 다양하게 분화가 가능한 지방줄기세포를 이용한 패키지 상품\r\n\r\n※ 줄기세포 상품은 내원 후 상담이 필수에요.`,
    amount: 1,
    price: {
      min: 300000,
      max: 1000000,
    },
  },
  {
    title: `골수/혈액줄기세포`,
    desc: `골수중간엽줄기세포를 직접적으로 피부와 두피에 주사하는 시술로 혈액에는 없는 중간엽줄기세포 시술로 줄기세포 시술을 받고 싶은데 지방채취가 부담스러운 분에게 적합해요.\r\n\r\n※ 줄기세포 상품은 내원 후 상담이 필수에요.`,
    amount: 4,
    price: {
      min: 500000,
      max: 3500000,
    },
  },
  {
    title: `나로좀(Narosome)`,
    desc: `나로부터 시작되는 의학적 아름다움, 나로좀\r\n\r\n엑소좀은 세포 간의 신호 전달을 담당하는 생체 유래 나노입자로, 피부 재생과 조직 복원, 염증 완화에 중요한 역할을 합니다. 나로좀은 지유만의 고유한 엑소좀 활용법으로 최적의 효과와 안전성을 동시에 제공합니다.\r\n\r\n※ 줄기세포 상품은 내원 후 상담이 필수에요.`,
    amount: 2,
    price: {
      min: 250000,
      max: 1000000,
    },
  },
  {
    title: `HSC PRS 혈액줄기세포`,
    desc: `시술 후 회복기간이 짧고, 혈액줄기세포를 통해 항노화, 혈액순환 개선을 원하시는 분들께 추천드리는 프리미엄 줄기세포 입문 상품\r\n\r\n※ 줄기세포 상품은 내원 후 상담이 필수에요.`,
    amount: 3,
    price: {
      min: 1000000,
      max: 8900000,
    },
  },
]);
</script>

<template>
  <div class="flex flex-col gap-y-5 p-5">
    <label class="flex h-10 appearance-none items-center gap-4 border bg-white px-4">
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
    <div class="grid grid-cols-4 border-y border-gray-400">
      <div
        v-for="(popular, index) in populars"
        :key="index"
        class="border-b border-[#edecec] p-4 text-center text-xs font-medium text-gray-400"
      >
        <button
          :class="{
            'text-[#9d8077]': index === 0,
          }"
          class="hover:text-[#9d8077]"
        >
          {{ popular }}
        </button>
      </div>
    </div>
    <div
      v-for="(item, index) of items"
      :key="index"
      class="flex flex-col gap-y-8 rounded-lg bg-gray-100 p-6"
    >
      <div class="flex justify-between">
        <div class="max-w-60">
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
      <div class="flex justify-between">
        <span class="content-end text-xl font-medium text-gray-700">
          {{ Intl.NumberFormat(`ko-KR`).format(item.price.min) }}
          ~
          {{ Intl.NumberFormat(`ko-KR`).format(item.price.max) }}
          <span class="text-xs">
            원
          </span>
        </span>
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
</template>
