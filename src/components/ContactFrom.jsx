export const ContactForm = () => {
  return (
    <form action="mailto:your-email@example.com" method="POST" className="grid gap-4">
      <input type="text" name="name" placeholder="Your name" className="border rounded-md p-3" required />
      <input type="email" name="email" placeholder="Email" className="border rounded-md p-3" required />
      <input type="text" name="business" placeholder="Business name" className="border rounded-md p-3" />
      <textarea name="message" rows="4" placeholder="How can I help?" className="border rounded-md p-3" required />
      <div className="flex items-center gap-4">
        <button type="submit" className="bg-rose-600 text-white px-4 py-2 rounded-md">Send message</button>
        <div className="text-sm text-gray-500">Or email: <span className="font-medium">your-email@example.com</span></div>
      </div>
    </form>
  );
}