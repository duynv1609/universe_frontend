<template>
  <div>
    <slot name="app-before" />
    <div id="app-before"></div>
    <div class="flex flex-col min-h-screen">
      <div class="flex-1 w-full flex flex-col">
        <div
          class="relative flex-1 flex flex-row mx-auto max-w-8xl w-full h-full"
        >
          <div class="lg:pl-8 py-4">
            <DashboardSidebar />
          </div>
          <div class="flex flex-col lg:ml-60 xl:w-290">
            <slot />
            <slot name="footer">
              <!-- <PageFooter /> -->
            </slot>
          </div>
        </div>
      </div>
    </div>
    <slot name="app-after" />
    <div id="app-after"></div>
  </div>
</template>
