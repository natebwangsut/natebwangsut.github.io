import React from "react";
import { useTrail, animated } from "react-spring";
import styled from "styled-components";

// TODO: Use ESM import once Gatsby supports it
const config = require("src/config.ts");

const LandingWrapper = styled.div`
  margin-bottom: 24px;
`;

const LandingTitleAnimation = styled(animated.div)`
  width: 100%;
  height: 1.2em;
  overflow: hidden;
  will-change: transform, opacity;

  font-size: 4.5rem;
  font-weight: 200;
  line-height: 4.5rem;
  letter-spacing: -0.1rem;
  white-space: nowrap;

  @media only screen and (max-width: 600px) {
    font-size: 2.5rem;
    line-height: 2.5rem;
    letter-spacing: -0.1rem;
  }
`;

const LandingTitle: React.FC<{ open: Boolean }> = ({ open, children, ...props }) => {
  const items = React.Children.toArray(children);
  const trail = useTrail(items.length, {
    config: { mass: 5, tension: 2000, friction: 200 },
    opacity: 1,
    y: open ? 0 : 20,
    from: { opacity: 0, y: 40, height: 0 },
  });
  return (
    <LandingWrapper {...props}>
      <div style={{ marginTop: "24px", marginBottom: "24px" }}>Hi my name is...</div>
      {trail.map(({ y, height, ...rest }, index) => (
        <LandingTitleAnimation key={index} style={{ ...rest, transform: y.to(y => `translate3d(0,${y}px,0)`) }}>
          <animated.div key={index} style={{ height, color: `var(${config.theme}-${4 + index * 2})` }}>
            {items[index]}
          </animated.div>
        </LandingTitleAnimation>
      ))}
    </LandingWrapper>
  );
};

export default LandingTitle;
