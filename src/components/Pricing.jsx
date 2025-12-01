export const Pricing = () => {
  return (
    <section id="pricing" className="py-16 bg-slate-50">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold">Pricing & Plans</h2>
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          <div className="p-6 bg-white rounded-lg">
            <h3 className="font-semibold">Basic — $49/mo</h3>
            <p className="text-sm text-gray-600 mt-2">Updates, backups, security checks.</p>
          </div>
          <div className="p-6 bg-white rounded-lg border-2 border-rose-600">
            <h3 className="font-semibold">Growth — $99/mo</h3>
            <p className="text-sm text-gray-600 mt-2">SEO tweaks, analytics, monthly report.</p>
          </div>
          <div className="p-6 bg-white rounded-lg">
            <h3 className="font-semibold">Premium — $199/mo</h3>
            <p className="text-sm text-gray-600 mt-2">Priority support & unlimited small edits.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
