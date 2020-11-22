import React, { ReactNode, DetailedHTMLProps, HTMLAttributes } from "react"
import styled from "styled-components"

interface TabPaneProps {
  activeTab: any
  key: any
  label: any
  children?: ReactNode | string
  dangerouslySetInnerHTML?:
    | any
    | DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>
  //
  onClick?: (tab: any) => void
}

const StyledTabPane = styled.section`
  position: relative;

  // padding-top: 20rem;
  // padding-bottom: 20rem;
`

const TabPane: React.FC<TabPaneProps> = ({
  activeTab,
  label,
  children,
  dangerouslySetInnerHTML,
  onClick,
}) => {
  return (
    <StyledTabPane
      dangerouslySetInnerHTML={dangerouslySetInnerHTML}
    ></StyledTabPane>
  )
}

export default TabPane
