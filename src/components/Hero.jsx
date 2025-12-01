export const Hero = () => {
  return (
    <section className="bg-gradient-to-r from-rose-50 to-white py-20">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">Premium websites and web apps for businesses worldwide</h1>
          <p className="mt-6 text-gray-700 max-w-xl">I build fast, secure, and mobile-friendly websites with booking, payments, and easy maintenance plans — so you can focus on serving customers.</p>

          <div className="mt-8 flex gap-4">
            <a href="#contact" className="inline-block bg-rose-600 text-white px-6 py-3 rounded-lg shadow">Book a free consult</a>
            <a href="#portfolio" className="inline-block px-6 py-3 rounded-lg border">See demos</a>
          </div>

          <div className="mt-6 text-sm text-gray-500">Starting at <span className="font-semibold">$300</span> • Maintenance plans from <span className="font-semibold">$49/mo</span></div>
        </div>

        <div className="bg-white  shadow p-6 ">
          <div className="h-64 bg-gray-100 rounded-lg flex items-center justify-center text-gray-400">Demo site preview</div>
          <ul className="mt-4 text-sm text-gray-600 space-y-2">
            <li>✅ Responsive design</li>
            <li>✅ Booking & payments</li>
            <li>✅ Admin dashboard</li>
          </ul>
        </div>
      </div>
    </section>
  );
}