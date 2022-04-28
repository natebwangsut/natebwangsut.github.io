<script lang="ts">
  import config from "../../../../config";
  import Instragram from "../../../../svg/instagram.svg"; // svg === '/src/image.svg'

  const socialLinks: { icon: any; alt:string, href: string }[] = [
    {
      icon: "",
      alt: "twitter",
      href: config.links.twitter,
    },
    {
      icon: Instragram,
      alt: "instragram",
      href: config.links.instagram,
    },
    {
      icon: "",
      alt: "linkedin",
      href: config.links.linkedin,
    },
    {
      icon: "",
      alt: "github",
      href: config.links.github,
    },
  ];
</script>

<div class="bar">
  {#each socialLinks as sl}
    <div class="social" style="--theme:var({config.theme});">
      <a href={sl.href} class="link" target="_blank">
        {sl.alt}
      </a>
    </div>
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
    color: #aaa;
    padding: calc(3rem / 6);
    padding-bottom: 0px;
    border: 2px solid transparent;
    transition: 0.2s ease-out;
  }
  div.social:hover {
    cursor: pointer;
    color: black;
    background-color: var(--theme);
  }

  a.link {
    color: inherit;
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
