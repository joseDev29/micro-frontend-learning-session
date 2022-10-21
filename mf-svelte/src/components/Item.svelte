<script>
  export let title, description, image, price
</script>

<div class="flex items-center space-x-12 pt-1">
  <div class="flex-shrink-0">
    <img class="w-12 h-12" src={image} alt={description} />
  </div>
  <div class="flex-1 min-w-0">
    <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
      {title}
    </p>
    <p class="text-sm text-gray-500 truncate dark:text-gray-400">
      {description}
    </p>
  </div>
  <div
    class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white"
  >
    ${price}
  </div>
</div>
