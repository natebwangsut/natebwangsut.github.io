<script lang="ts">
  // import React from "react";
  // import styled from "styled-components";
  import LandingSocial from "./social/LandingSocial.svelte";
  import LandingTitle from "./title/LandingTitle.svelte";
  import LandingTitleItem from "./title/LandingTitleItem.svelte";

  // import { LandingProps } from "../../../interface/props/section";

  const LANDING_TITLE_NAME = "Nate Bhurinat Wangsutthitham";
</script>

<!-- const LandingHeader = styled.div`
  margin-top: 15rem;
`;

const LandingSubtitle = styled.div`
  color: #aaa;
`;
-->

<div>
  <!-- <LandingHeader /> -->
  <div style="margin-top: 15rem" />
  <LandingTitle>
    <!-- {LANDING_TITLE_NAME.split(" ").map((word: string) => (
      ))} -->
    {#each LANDING_TITLE_NAME.split(" ") as word, index}
      <LandingTitleItem index={index}>{word}</LandingTitleItem>
    {/each}
  </LandingTitle>
  <LandingSocial />
  <!-- <LandingSubtitle dangerouslySetInnerHTML={{ __html: props.html }}></LandingSubtitle> -->
</div>
