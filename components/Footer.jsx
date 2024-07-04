function Footer() {
  return (
    <footer className="border-t border-accent mt-4 pt-2">
      <p className="text-center">
        &copy; Ashraful Sifat <span>{new Date().getFullYear()}</span>
      </p>
    </footer>
  );
}

export default Footer;
