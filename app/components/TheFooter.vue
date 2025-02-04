<template>
  <footer class="flex flex-col gap-12 bg-[#f5f5f5] p-6">
    <section class="flex flex-col gap-6 text-xs text-gray-700">
      <div>
        <p>평일</p>
        <p class="mt-2">
          오전 10시 30분 - 오후 9시
        </p>
      </div>
      <div>
        <p>토요일 · 일요일</p>
        <p class="mt-2">
          오전 10시 30분 - 오후 5시
        </p>
      </div>
      <div>
        <p>공휴일</p>
        <p class="mt-2">
          오전 10시 30분 - 오후 5시
        </p>
        <p class="mt-2">
          설날/추석 당일 휴무
        </p>
      </div>
    </section>
    <section class="flex justify-end text-xs font-medium">
      <ul class="flex flex-col gap-2">
        <li>
          <a href="#!">카카오 플러스 친구</a>
        </li>
        <li>
          <a href="#!">인스타그램</a>
        </li>
        <li>
          <a href="#!">페이스북</a>
        </li>
        <li>
          <a href="#!">블로그</a>
        </li>
      </ul>
    </section>
    <section>
      <img
        src="~/assets/images/footer-logo.svg"
        alt="지유클리닉"
        width="110"
        height="97"
      >
    </section>
    <section class="text-xs text-gray-700">
      <dl class="grid grid-cols-[80px_1fr] gap-y-1">
        <dt>상호명</dt>
        <dd>사적인 아름다움 지유의원</dd>
        <dt>주소</dt>
        <dd>서울특별시 서초구 서초대로77길 54 더블유타워 3층, 4층</dd>
        <dt>대표번호</dt>
        <dd><a href="tel:0262410096">02-6241-0096</a></dd>
        <dt>대표</dt>
        <dd>박기범</dd>
        <dt>사업자등록번호</dt>
        <dd>579-14-01399</dd>
      </dl>
      <nav class="mt-4 flex gap-4">
        <a href="#!">개인정보처리방침</a>
        <a href="#!">사이트이용약관</a>
        <a href="#!">제증명수수료 비용 안내</a>
      </nav>
    </section>
  </footer>
</template>
