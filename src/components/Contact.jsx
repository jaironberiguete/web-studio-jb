import { ContactForm } from './ContactFrom.jsx';
export const Contact = () => {
  return (
    <section id="contact" className="py-16">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-2xl font-bold">Get in touch</h2>
        <p className="text-gray-600 mt-2">Book a free consultation or send details about your project.</p>
        <div className="mt-6 bg-white p-6 rounded-lg shadow">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}