 export const Footer = () => {
  return (
 <footer className="border-t py-6 mt-12">
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
          <div className="text-sm">© {new Date().getFullYear()} Bergen Web Studio</div>
          <div className="text-sm text-gray-500">Worldwide • <a href="#contact" className="text-rose-600">Book a call</a></div>
        </div>
      </footer>
    );}