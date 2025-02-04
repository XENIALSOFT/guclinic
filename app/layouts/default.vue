<template>
  <div class="mx-auto grid h-full min-h-screen max-w-screen-md grid-rows-[1fr_auto]">
    <TheHeader />
    <TheMain>
      <slot />
    </TheMain>
    <TheFooter />
  </div>
</template>
