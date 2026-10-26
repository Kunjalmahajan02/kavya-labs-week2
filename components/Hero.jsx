import { COMPANY, STATS } from "@/lib/content";

// A sample conversation that shows the product instead of describing it
const CHAT = [
  { from: "customer", text: "Bhaiya, kal 2 kg paneer mil jayega? Delivery Koramangala mein." },
  { from: "kavya", text: "Haan ji! 2 kg paneer ₹840 ka hoga. Kal subah 9–11 baje Koramangala delivery ho jayegi. Order confirm karoon?" },
  { from: "customer", text: "Haan, confirm karo 👍" },
  { from: "kavya", text: "Order #4821 confirmed ✅ Payment ke liye UPI link bhej raha hoon." },
];

export default function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden bg-gradient-to-b from-brand-50 to-white">
      <div className="max-w-6xl mx-auto px-5 pt-16 pb-20 md:pt-24 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <p className="inline-flex items-center gap-2 text-sm font-medium text-brand-600 bg-brand-100 px-3 py-1 rounded-full">
            🚀 Built in {COMPANY.city}
          </p>
          <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-ink leading-tight break-words">
            {COMPANY.tagline}
          </h1>
          <p className="mt-5 text-lg text-slate-600 max-w-xl">
            {COMPANY.product} is an AI assistant that answers your customers on WhatsApp and your website in 12 Indian
            languages, takes orders and books appointments, 24×7.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="/login"
              className="bg-brand-500 hover:bg-brand-600 text-white font-semibold px-6 py-3 rounded-xl shadow-lg shadow-brand-500/25"
            >
              Get started free
            </a>
            <a href="#how-it-works" className="border border-slate-300 hover:border-slate-400 font-semibold px-6 py-3 rounded-xl">
              See how it works
            </a>
          </div>

          <dl className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-4">
            {STATS.map(([value, label]) => (
              <div key={label} className="flex flex-col-reverse">
                <dt className="text-xs text-slate-500">{label}</dt>
                <dd className="text-2xl font-bold text-ink">{value}</dd>
              </div>
            ))}
          </dl>
        </div>

        <figure className="relative mx-auto w-full max-w-sm">
          <div className="absolute -inset-6 bg-brand-400/20 blur-3xl rounded-full" aria-hidden="true" />
          <div className="relative rounded-3xl bg-white shadow-2xl ring-1 ring-slate-200 overflow-hidden">
            <div className="bg-emerald-600 text-white px-4 py-3 flex items-center gap-3">
              <span className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center font-bold" aria-hidden="true">
                S
              </span>
              <div>
                <p className="font-semibold leading-tight">Sharma Dairy</p>
                <p className="text-xs text-emerald-100">powered by {COMPANY.product} · online</p>
              </div>
            </div>
            <div className="bg-[#efe7dd] p-4 space-y-3 text-sm">
              {CHAT.map((m, i) => (
                <p
                  key={i}
                  className={`max-w-[85%] px-3 py-2 rounded-xl shadow-sm ${
                    m.from === "kavya" ? "bg-white rounded-tl-sm" : "bg-[#d9fdd3] ml-auto rounded-tr-sm"
                  }`}
                >
                  {m.text}
                </p>
              ))}
            </div>
          </div>
          <figcaption className="sr-only">Example WhatsApp conversation where Kavya takes an order in Hinglish</figcaption>
        </figure>
      </div>
    </section>
  );
}
