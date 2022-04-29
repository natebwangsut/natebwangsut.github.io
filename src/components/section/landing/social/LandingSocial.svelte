<script lang="ts">
  import config from "../../../../config";
  import GitHub from "../../../../svg/github.svelte";
  import Instragram from "../../../../svg/instagram.svelte";
  import Linkedin from "../../../../svg/linkedin.svelte";
  import Twitter from "../../../../svg/twitter.svelte";

  // import GitHub from "../../../../svg/github.svg";
  // import Instragram from "../../../../svg/instagram.svg";
  // import Linkedin from "../../../../svg/linkedin.svg";
  // import Twitter from "../../../../svg/twitter.svg";

  const socialLinks: { icon: any; alt: string; href: string }[] = [
    {
      icon: Twitter,
      // icon: "",
      alt: "twitter",
      href: config.links.twitter,
    },
    {
      icon: Instragram,
      // icon: "",
      alt: "instragram",
      href: config.links.instagram,
    },
    {
      icon: Linkedin,
      alt: "linkedin",
      href: config.links.linkedin,
    },
    {
      icon: GitHub,
      alt: "github",
      href: config.links.github,
    },
  ];
</script>

<div class="bar">
  {#each socialLinks as sl}
    <!-- <a href={sl.href} class="link" target="_blank"> -->
    <a href="#">
      <div class="social" style="--theme:var({config.theme});--themeBg:var({config.themeBg})">
        <!-- {@html sl.icon} -->
        <!-- <img src={sl.icon} style="fill: white; stroke: white;"/> -->
        <svelte:component this={sl.icon}/>
      </div>
    </a>
  {/each}
  <hr class="divider" style="--theme:var({config.theme});" />
</div>

<style>
  div.bar {
    display: flex;
    flex-direction: row;
    gap: 1rem;
    margin-bottom: 3rem;
  }

  div.social {
    width: 4rem;
    height: 4rem;
    fill: rgba(255, 255, 255, 0.3);
    padding: calc(3rem / 6);
    border: 2px solid transparent;
    transition: 0.25s ease-out;
  }
  div.social:hover {
    cursor: pointer;
    fill: var(--theme);
  }

  hr.divider {
    flex: 1;
    display: block;
    height: 0px;
    background-color: transparent;
    border: 2px solid var(--theme);
    margin-top: calc(4rem / 2 + 1px);
    margin-bottom: calc(4rem / 2 + 1px);
    padding: 0;
  }
</style>
