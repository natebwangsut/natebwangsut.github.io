<!--
/******************************************************************************
 * Styling
 ******************************************************************************/
-->

<!--
/******************************************************************************
 * Component
 ******************************************************************************/
-->

<div
  style="
    margin: 0 auto;
    padding: 24px;
    max-width: 960px;"
>
  <main>
    <slot />
  </main>
  <footer style="margin-top: 20rem; margin-bottom: 5rem;">
    © {new Date().getFullYear()} | designed and developed by
    <a href="https://github.com/natebwangsut" target="_blank">@natebwangsut</a>
  </footer>
</div>
