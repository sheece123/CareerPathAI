const Footer = () => {
  return (
    <footer className="mt-20 border-t px-6 md:px-12 py-6 text-sm text-gray-500">
      <div className="flex flex-col md:flex-row justify-between items-center gap-4">
        
        <p>© 2024 CareerPathAI. All rights reserved.</p>

        <div className="flex gap-6">
          <a href="#" className="hover:text-gray-900">About Us</a>
          <a href="#" className="hover:text-gray-900">Contact</a>
          <a href="#" className="hover:text-gray-900">Privacy Policy</a>
        </div>

      </div>
    </footer>
  );
};

export default Footer;