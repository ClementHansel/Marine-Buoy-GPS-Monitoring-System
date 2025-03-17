const Footer = () => {
  return (
    <footer className="w-full bg-gray-900 text-white p-4 text-center">
      <p className="text-sm">
        &copy; {new Date().getFullYear()} Marine Monitoring System. All rights
        reserved.
      </p>
    </footer>
  );
};

export default Footer;
