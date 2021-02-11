import React from "react";
import { useTrail, animated } from "react-spring";
import styled from "styled-components";

const MeTitleWrapper = styled.div`
  margin-bottom: 24px;
`;

const MeTitleWords = styled(animated.div)`
  position: relative;
  width: 100%;
  height: 110px;
  line-height: 85px;
  // color: var(--orange-web);
  font-size: 4.5em;
  font-weight: 800;
  letter-spacing: -2px;
  will-change: transform, opacity;
  overflow: hidden;
`;

const MeTitle: React.FC = ({ children, ...props }) => {
  const items = React.Children.toArray(children);
  const trail = useTrail(items.length, {
    config: { mass: 5, tension: 2000, friction: 200 },
    opacity: 1,
    x: 0,
    height: 110,
    from: { opacity: 0, x: 20, height: 0 },
  });
  return (
    <MeTitleWrapper {...props}>
      <div style={{ marginTop: "24px", marginBottom: "24px" }}>Hi my name is...</div>
      <h2>
        {trail.map(({ x, height, ...rest }, index) => (
          <MeTitleWords style={{ ...rest, transform: `translate3d(0,${x}px,0)` }}>
            <animated.div style={{ height, color: `var(--orange-web-${4 + index * 2})`}}>{items[index]}</animated.div>
          </MeTitleWords>
        ))}
      </h2>
    </MeTitleWrapper>
  );
};

export default MeTitle;
