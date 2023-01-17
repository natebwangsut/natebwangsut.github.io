<!--
  NOTE: Forget about using interactive svelte until
  https://github.com/withastro/astro/issues/2456 is resolved.
-->
<script lang="ts">
  export let items = [];

  let activeTab = 0;
  const setActiveTab = (tab) => {
    activeTab = tab;
  };
</script>

<div
  style="
  display: flex;
  align-items: flex-start;
  position: relative;
"
>
  <!-- TabList -->
  <ol style="flex: 1; margin: 8px 0 8px 0;">
    {#each items as item, index}
      <div
        class="tab-list"
        class:active="{activeTab === index}"
        on:click={() => setActiveTab(index)}
      >
        {item.company}
      </div>
    {/each}
  </ol>
  <!-- TabPane -->
  <div class="tab-content">
    {#each items as item, index}
      {#if activeTab === index}
        <div>
          <h2>{item.role}</h2>
          <p>{item.start_date} - {item.end_date}</p>
          <slot />
        </div>
      {/if}
    {/each}
  </div>
</div>

<style>
  div {
    color: #aaa;
  }

  h2 {
    color: var(--mint-6);
    margin-bottom: 0.5rem;
  }

  p {
    color: #fff;
  }

  div.tab-list {
    padding: 8px;
    transition: all 0.2s ease-out;
    border-left: 1px solid transparent;
  }

  div.tab-list:hover {
    cursor: pointer;
    color: var(--mint-6);
  }

  div.tab-list.active {
    color: var(--mint-6);
    background: var(--mint-bg);
    border-left: 3px solid var(--mint-6);
  }

  div.tab-content {
    flex: 2;
    margin: 8px;
    padding: 8px;
    min-height: 500px;
  }
</style>
