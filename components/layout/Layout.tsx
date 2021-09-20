import React from "react"

const HandlerComponent: React.FC = () => (
  <>© {new Date().getFullYear()} | designed and developed by @natebwangsut</>
)

const Layout: React.FC = ({ children }) => {
  return (
    <div
      style={{
        margin: "0 auto",
        padding: "24px",
        maxWidth: 960,
      }}
    >
      <main>{children}</main>
      <footer style={{ marginBottom: "2rem" }}>
        <HandlerComponent />
      </footer>
    </div>
  )
}

export default Layout
