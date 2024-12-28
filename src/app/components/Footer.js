export default function Footer() {
    return (
      <footer className="bg-gray-800 text-white py-6">
        <div className="container mx-auto px-6 text-center">
          <p className="text-sm mb-4">
            &copy; {new Date().getFullYear()} Your Name. All rights reserved.
          </p>
          <div className="space-x-4">
            <a href="/about" className="hover:text-blue-500">About</a>
            <a href="/blog" className="hover:text-blue-500">Blog</a>
            <a href="/contact" className="hover:text-blue-500">Contact</a>
          </div>
        </div>
      </footer>
    );
  }
  