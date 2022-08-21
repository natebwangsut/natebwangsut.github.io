<script lang="ts">
  import LandingSocial from "./social/LandingSocial.svelte";
  import LandingTitle from "./title/LandingTitle.svelte";
  import LandingTitleItem from "./title/LandingTitleItem.svelte";

  const LANDING_TITLE_NAME = "Nate Bhurinat Wangsutthitham";
</script>

<div>
  <div style="margin-top: 15rem" />
  <LandingTitle>
    {#each LANDING_TITLE_NAME.split(" ") as word, index}
      <LandingTitleItem index={index}>{word}</LandingTitleItem>
    {/each}
  </LandingTitle>
  <LandingSocial />
  <div style="color: #aaa">
    Just another software engineer living on the same planet as you do.
  </div>
</div>
