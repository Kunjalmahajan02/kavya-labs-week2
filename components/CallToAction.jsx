import { COMPANY } from "@/lib/content";

export default function CallToAction() {
  return (
    <section id="get-started" className="py-20 md:py-28">
      <div className="max-w-5xl mx-auto px-5">
        <div className="rounded-3xl bg-gradient-to-br from-brand-500 to-brand-600 px-8 py-14 md:px-14 text-center text-white shadow-xl">
          <h2 className="text-3xl sm:text-4xl font-bold">Let Kavya handle your next 1,000 customer chats</h2>
          <p className="mt-4 text-brand-50 max-w-xl mx-auto">
            We're onboarding our first businesses in {COMPANY.city}. Get early access and a free setup call with our team.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a href="/login" className="bg-white text-brand-600 font-semibold px-6 py-3 rounded-xl hover:bg-brand-50">
              Create your account
            </a>
            <a href="#pricing" className="border border-white/60 font-semibold px-6 py-3 rounded-xl hover:bg-white/10">
              View pricing
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
