import { PLANS } from "@/lib/content";

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-5">
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-sm font-semibold text-brand-600 uppercase tracking-wide">Pricing</p>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-ink">Simple plans in rupees</h2>
          <p className="mt-4 text-slate-600">Start free. Upgrade when Kavya is busier than you are.</p>
        </div>

        <ul className="mt-14 grid md:grid-cols-3 gap-6 items-stretch">
          {PLANS.map((plan) => (
            <li
              key={plan.name}
              className={`relative min-w-0 rounded-2xl p-5 sm:p-7 flex flex-col ${
                plan.highlight ? "bg-ink text-white shadow-2xl md:-my-3" : "border border-slate-200"
              }`}
            >
              {plan.highlight && (
                <span className="absolute -top-3 left-7 text-xs font-semibold bg-brand-500 text-white px-3 py-1 rounded-full">
                  Most popular
                </span>
              )}
              <h3 className="font-semibold text-lg">{plan.name}</h3>
              <p className={`mt-1 text-sm ${plan.highlight ? "text-slate-300" : "text-slate-500"}`}>{plan.blurb}</p>
              <p className="mt-5">
                <span className="text-3xl sm:text-4xl font-extrabold">{plan.price}</span>
                <span className={plan.highlight ? "text-slate-300" : "text-slate-500"}>{plan.period}</span>
              </p>
              <ul className="mt-6 space-y-2 text-sm flex-1">
                {plan.features.map((f) => (
                  <li key={f} className="flex gap-2">
                    <span className="text-brand-500" aria-hidden="true">
                      ✓
                    </span>
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href="/login"
                className={`mt-7 text-center font-semibold px-5 py-3 rounded-xl ${
                  plan.highlight ? "bg-brand-500 hover:bg-brand-600 text-white" : "border border-slate-300 hover:border-slate-400"
                }`}
              >
                {plan.cta}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
