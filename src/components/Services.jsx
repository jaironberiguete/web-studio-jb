export const Services = () => {
  return (
    <section id="services" className="py-24">
      <div className="max-w-6xl mx-auto px-6 ">
        <h2 className="text-3xl font-bold">Services</h2>
        <p className="mt-2 text-gray-600 max-w-2xl">Custom websites, booking systems, e-commerce and monthly maintenance plans — built with modern technologies and reliable hosting.</p>

        <div className="mt-8 grid md:grid-cols-3 gap-6 ">
          <div className="p-6 rounded-lg shadow-sm bg-rose-600/10">
            <h3 className="font-semibold">Starter Website</h3>
            <p className="mt-2 text-sm text-gray-600">1-3 pages, contact form, Google Maps.</p>
            <div className="mt-4 font-bold">$300–$500</div>
          </div>

          <div className="p-6 bg-white rounded-lg bg-rose-600/10">
            <h3 className="font-semibold">Business Website</h3>
            <p className="mt-2 text-sm text-gray-600">4-6 pages, blog, basic SEO, 2 revisions.</p>
            <div className="mt-4 font-bold">$700–$1,200</div>
          </div>

          <div className="p-6 bg-white rounded-lg bg-rose-600/10">
            <h3 className="font-semibold">Booking & Dashboard</h3>
            <p className="mt-2 text-sm text-gray-600">Booking, payments, admin dashboard.</p>
            <div className="mt-4 font-bold">$1,500–$2,500</div>
          </div>
        </div>
      </div>
    </section>
  );
}