<!--
/******************************************************************************
 * Styling
 ******************************************************************************/
-->
<script lang="ts">
  // Normalised browsers
  // import "normalize.css";

  // Import dependencies
  import "./fonts.css";
  import "./palette.css";

  // Actual layout styling
  import "./Layout.css";
</script>

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
  <footer style="marginBottom: 2rem;">
    © {new Date().getFullYear()} | designed and developed by
    <u>@natebwangsut</u>
  </footer>
</div>
