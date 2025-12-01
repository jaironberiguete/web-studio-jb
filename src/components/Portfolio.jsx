export const Portfolio = () => {
  const items = [
    { title: 'Barbershop Demo', desc: 'Booking + services + gallery' },
    { title: 'Restaurant Demo', desc: 'Menu, reservations, gallery' },
    { title: 'E-commerce Demo', desc: 'Shop + checkout + inventory' },
  ];

  return (
    <section id="portfolio" className="py-16">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold">Portfolio / Demos</h2>
        <div className="mt-6 grid md:grid-cols-3 gap-6">
          {items.map((it) => (
            <div key={it.title} className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="h-40 bg-gray-100 flex items-center justify-center text-gray-300">Screenshot</div>
              <div className="p-4">
                <h3 className="font-semibold">{it.title}</h3>
                <p className="text-sm text-gray-600 mt-2">{it.desc}</p>
                <div className="mt-4 text-sm">
                  <a className="text-rose-600 hover:underline" href="#">Live demo</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}