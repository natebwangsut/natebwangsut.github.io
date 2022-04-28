<script lang="ts">
  // import React from "react";
  // import { useTrail, animated } from "react-spring";
  // import styled from "styled-components";

  // TODO: Use ESM import once Gatsby supports it
  // const config = require("src/config.ts");
</script>

<!-- const LandingWrapper = styled.div`
  margin-bottom: 24px;
`;

const LandingTitleAnimation = styled(animated.div)`
  position: relative;
  width: 100%;
  height: 100px;
  line-height: 90px;
  font-size: 5rem;
  font-family: "Manrope", -apple-system, BlinkMacSystemFont, sans-serif;
  font-weight: 400;
  letter-spacing: -0.1rem;
  will-change: transform, opacity;
  overflow: hidden;
  white-space: nowrap;

  @media only screen and (max-width: 600px) {
    font-size: 3rem;
    line-height: 2.5rem;
    letter-spacing: -0.1rem;
    height: 4rem;
  }
`; -->

<!-- <script>
  const items = React.Children.toArray(children);
  const trail = useTrail(items.length, {
    config: { mass: 5, tension: 2000, friction: 200 },
    opacity: 1,
    x: open ? 0 : 20,
    height: open ? 110 : 0,
    from: { opacity: 0, x: 20, height: 0 },
  });
</script> -->

<div style="margin-bottom: 24px;">
  <div style="marginTop: 24px; marginBottom 24px;">Hi my name is...</div>
  <slot />
</div>
