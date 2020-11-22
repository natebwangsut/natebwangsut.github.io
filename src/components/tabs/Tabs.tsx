import React, { useState, ReactElement } from "react"
import TabPane from "../tabpane/TabPane"
import styled from "styled-components"

const TabList = styled.ol`
  margin: 0
`


const Tabs: React.FC<{ children: ReactElement[] }> = ({ children }) => {
  const [activeTab, setActiveTab] = useState(1)

  const onClickTabItem = (tab: any) => {
    setActiveTab(tab)
  }

  return (
    <div className="tabs">
      <TabList>
        {children.map(child => {
          const { label, dangerouslySetInnerHTML } = child.props
          return (
            <TabPane
              activeTab={activeTab}
              key={label}
              label={label}
              onClick={onClickTabItem}
              dangerouslySetInnerHTML={{ __html: dangerouslySetInnerHTML }}
            />
          )
        })}
      </TabList>
      <div className="tab-content">
        {children.map(child => {
          if (child.props.label !== activeTab) return undefined
          return child.props.children
        })}
      </div>
    </div>
  )
}

export default Tabs
