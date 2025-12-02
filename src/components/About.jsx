export const About = () => {
  return (
    <section id="about" className="py-16 bg-black">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h2 className="text-3xl font-bold text-white">About Bergen Web Studio</h2>
          <p className="mt-4 text-gray-200">I’m a solo developer serving clients worldwide. I build modern web apps and websites with reliability, performance, and maintenance in mind. My mission is to help local businesses get more customers with minimal hassle.</p>
          <ul className="mt-4 text-sm text-gray-400 space-y-2">
            <li>• React, Next.js, Tailwind</li>
            <li>• Hosting on Vercel / AWS</li>
            <li>• Booking systems, e‑commerce, dashboards</li>
          </ul>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="h-48 bg-gray-100 rounded-lg flex items-center justify-center text-gray-300">Photo / Headshot</div>
        </div>
      </div>
    </section>
  );
}