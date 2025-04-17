export function Footer() {
  return (
    <footer className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-6 border-t border-neutral-800">
      <div className="flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center space-x-4 text-sm text-neutral-400">
          <a
            href="/terms"
            className="hover:text-white transition-colors duration-300"
          >
            Terms & Conditions
          </a>
          <span className="text-neutral-600">|</span>
          <a
            href="/privacy"
            className="hover:text-white transition-colors duration-300"
          >
            Privacy Policy
          </a>
        </div>

        <div className="flex items-center space-x-4">
          <a
            href="https://github.com/JuniorReisx"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-neutral-900 hover:bg-neutral-800 p-3 rounded-full transition-all duration-300 group"
          >
            <img
              src="/assets/github.svg"
              alt="GitHub"
              className="w-5 h-5 opacity-70 group-hover:opacity-100 transition-opacity"
            />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-neutral-900 hover:bg-neutral-800 p-3 rounded-full transition-all duration-300 group"
          >
            <img
              src="/assets/twitter.svg"
              alt="Twitter"
              className="w-5 h-5 opacity-70 group-hover:opacity-100 transition-opacity"
            />
          </a>
          <a
            href="https://www.instagram.com/juniorreisx/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-neutral-900 hover:bg-neutral-800 p-3 rounded-full transition-all duration-300 group"
          >
            <img
              src="/assets/instagram.svg"
              alt="Instagram"
              className="w-5 h-5 opacity-70 group-hover:opacity-100 transition-opacity"
            />
          </a>
        </div>

        <div className="text-sm text-neutral-500">
          © 2025 <span className="text-neutral-400">Junior</span>
          <span className="text-blue-500">.</span> All rights reserved.
        </div>
      </div>
    </footer>
  );
}
