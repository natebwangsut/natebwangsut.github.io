/** @jsxImportSource solid-js */

const Footer = () => {
  return (
    <footer style="width: 940px; margin: auto; margin-top: 20rem; margin-bottom: 5rem;">
      © {new Date().getFullYear()} | designed and developed by
      <a
        href="https://github.com/natebwangsut"
        target="_blank"
        rel="noreferrer"
        style="margin-left: 0.2rem;"
      >
        @natebwangsut
      </a>
    </footer>
  );
};

export default Footer;
