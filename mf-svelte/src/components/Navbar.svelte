<nav
  class="w-full  items-center justify-between flex  p-2 sticky nav_container"
>
  <a href="/" rel="noreferrer">
    <img
      src="https://22465829.fs1.hubspotusercontent-na1.net/hub/22465829/hubfs/logo.png"
      class="mr-5 h-6 sm:h-9"
      alt="Flowbite Logo"
    />
  </a>
  <slot />
</nav>

<style>
  .nav_container {
    top: 5px;
  }
</style>
