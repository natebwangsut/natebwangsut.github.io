<script>
  import config from "../../../../config";

  export let index;
  $: cssVarStyles = `--index:${index};`;
</script>

<div>
  <h2
    class="animation"
    style="
    --index:{index};
    color: var({config.theme}-{4 + index * 2});
    "
  >
    <slot />
  </h2>
</div>

<style>
  @keyframes animation {
    from {
      opacity: 0;
      transform: translateY(20%);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .animation {
    opacity: 0;
    width: 100%;
    height: 100px;
    line-height: 90px;
    font-size: 5rem;
    margin-bottom: 0;
    overflow: hidden;
    white-space: nowrap;

    /* Fonts */
    font-family: Lexend, -apple-system, BlinkMacSystemFont, sans-serif;
    font-weight: 200;
    letter-spacing: -0.2rem;

    /* Transition / Animation */
    will-change: transform, opacity;
    animation: 0.5s ease-in calc(var(--index) * 0.1s) 1 animation forwards;
  }
</style>
