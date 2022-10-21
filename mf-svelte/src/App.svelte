<script>
  import Item from './components/Item.svelte'
  import Modal from './components/Modal.svelte'
  import Navbar from './components/Navbar.svelte'
  import SearchBar from './components/SearchBar.svelte'

  import { data } from './service/getAllproducts'

  $: result = []
  let search,
    it = 99,
    visible = false

  const searchProduct = async () => {
    result = data.filter(e => e.title.toLowerCase().search(search) >= 0)
    it = result.length
    visible = true
  }

  const clearSearch = () => {
    search = ''
    result = []
  }

  const closeDialog = () => {
    visible = false
  }
</script>

<Navbar>
  <SearchBar bind:search {searchProduct} {clearSearch} />
</Navbar>

<Modal {visible} {closeDialog}>
  <ul class=" divide-y divide-gray-200 dark:divide-gray-700">
    {#each result as res}
      <li class="pb-3 sm:pb-4">
        <Item {...res} />
      </li>
    {/each}
  </ul>
  {#if it === 0}
    <p>no result</p>
  {/if}
</Modal>

<style>
</style>
