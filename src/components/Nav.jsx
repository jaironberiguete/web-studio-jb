
import React from 'react';

export const Nav = () => {
  const [open, setOpen] = React.useState(false);
  return (
    <header className="bg-white/80 backdrop-blur sticky top-0 z-40 shadow-sm">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="text-2xl font-extrabold">Atlas Web Studio</div>
        <nav className="space-x-6 hidden md:flex items-center text-sm">
          <a href="#services" className="hover:text-rose-600">Services</a>
          <a href="#pricing" className="hover:text-rose-600">Pricing</a>
          <a href="#portfolio" className="hover:text-rose-600">Portfolio</a>
          <a href="#about" className="hover:text-rose-600">About</a>
          <a href="#contact" className="bg-rose-600 text-white px-3 py-2 rounded-md">Book a Call</a>
          {/* Language switcher */}
          {/* <div className="ml-4 flex items-center gap-2">
            <button aria-label="English" className="text-sm px-2 py-1 rounded-md border">EN</button>
            <button aria-label="Spanish" className="text-sm px-2 py-1 rounded-md border">ES</button>
          </div> */}
        </nav>

        <div className="md:hidden">
          <button aria-label="menu" onClick={() => setOpen(!open)} className="p-2 rounded-md border">☰</button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white/95 border-t">
          <div className="max-w-6xl mx-auto px-6 py-4 space-y-3">
            <a href="#services" className="block">Services</a>
            <a href="#pricing" className="block">Pricing</a>
            <a href="#portfolio" className="block">Portfolio</a>
            <a href="#about" className="block">About</a>
            <a href="#contact" className="block">Book a Call</a>
            <div className="pt-2 flex gap-2">
              <button aria-label="English" className="flex-1 rounded-md border py-2">EN</button>
              <button aria-label="Spanish" className="flex-1 rounded-md border py-2">ES</button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
