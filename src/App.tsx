import React from 'react';
import { motion } from 'motion/react';
import Header from './components/Header';
import Footer from './components/Footer';
import { Check, ArrowRight, Play } from 'lucide-react';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-brand-cream font-sans text-brand-dark-blue">
      <Header />
      
      <main>
        {/* HERO SECTION - FULL VIDEO BACKGROUND */}
        <section className="relative h-screen min-h-[800px] w-full overflow-hidden bg-brand-dark-blue flex flex-col justify-between">
          {/* Video Background */}
          <div className="absolute inset-0 z-0">
            <video 
              autoPlay
              loop 
              muted 
              playsInline 
              className="w-full h-full object-cover opacity-60"
            >
              <source src="/HeroPrism.mp4" type="video/mp4" />
            </video>
            {/* Overlays for readability and depth */}
            <div className="absolute inset-0 bg-gradient-to-b from-brand-dark-blue/60 via-transparent to-brand-dark-blue"></div>
            <div className="absolute bottom-0 left-0 right-0 h-96 bg-gradient-to-t from-brand-dark-blue to-transparent"></div>
          </div>

          {/* Top Content (Centered) */}
          <div className="relative z-10 flex-grow flex flex-col items-center justify-center text-center px-6 pt-40 md:pt-20">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="max-w-5xl"
            >
              <h1 className="text-6xl md:text-8xl font-bold serif leading-[0.9] mb-8 tracking-tighter text-white">
                Lose Fat. Protect Muscle. <br />
                <span className="text-brand-teal">One Flat Monthly Price.</span>
              </h1>
              <p className="text-xl md:text-2xl text-white/80 mb-10 leading-relaxed max-w-2xl mx-auto">
                Physician-prescribed GLP-1 therapy with transparent pricing and a muscle-preservation protocol built for serious results.
              </p>
            </motion.div>
          </div>

          {/* Bottom Content (Pricing, CTA, and Partner Bar) */}
          <div className="relative z-10 w-full">
            <div className="max-w-[1450px] mx-auto px-6 md:px-12 pb-12">
              <div className="flex flex-col lg:flex-row items-end justify-between gap-12 mb-12">
                {/* Pricing Row */}
                <div className="flex flex-wrap gap-4 w-full lg:w-auto">
                  <div className="bg-white/10 backdrop-blur-md p-6 rounded-3xl border border-white/10 flex-1 min-w-[200px] text-white">
                    <h3 className="text-[10px] font-bold uppercase tracking-widest text-white/40 mb-2">Semaglutide</h3>
                    <p className="text-3xl font-bold serif">$249<span className="text-lg font-sans text-white/40">/mo</span></p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-md p-6 rounded-3xl border border-white/10 flex-1 min-w-[200px] text-white">
                    <h3 className="text-[10px] font-bold uppercase tracking-widest text-white/40 mb-2">Tirzepatide</h3>
                    <p className="text-3xl font-bold serif">$429<span className="text-lg font-sans text-white/40">/mo</span></p>
                  </div>
                </div>

                {/* CTA and Microtext */}
                <div className="flex flex-col items-center lg:items-end gap-4">
                  <a 
                    href="https://shop.embracehealth.ai/collections/weight-loss" 
                    className="px-12 py-6 bg-brand-teal text-white font-bold rounded-full text-lg hover:scale-105 transition-all shadow-2xl shadow-brand-teal/40"
                  >
                    Start My Medical Assessment
                  </a>
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/30">
                    Takes 2–3 minutes. No obligation.
                  </p>
                </div>
              </div>

              {/* Partner/Ad Bar (Integrated into the bottom of the hero) */}
              <div className="pt-12 border-t border-white/5 flex flex-wrap justify-center md:justify-between items-center gap-8 opacity-40 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-700">
                <span className="text-white font-bold tracking-widest text-[10px] uppercase">Licensed MDs</span>
                <span className="text-white font-bold tracking-widest text-[10px] uppercase">Free Shipping</span>
                <span className="text-white font-bold tracking-widest text-[10px] uppercase">100% Online</span>
                <span className="text-white font-bold tracking-widest text-[10px] uppercase">No Membership Fees</span>
                <span className="text-white font-bold tracking-widest text-[10px] uppercase">Nationwide Coverage</span>
              </div>
            </div>
          </div>
        </section>

        {/* PROTOCOL INTRO SECTION */}
        <section className="bg-brand-dark-blue py-24 border-t border-white/5">
  <div className="max-w-[1450px] mx-auto px-6 md:px-12">
    <div className="grid lg:grid-cols-2 gap-20 items-center">
      <div>
        <h2 className="text-4xl md:text-6xl font-bold serif mb-8 tracking-tighter text-white">This Is Not a Prescription Mill.</h2>
        <p className="text-xl text-white/60 leading-relaxed mb-8">
          Most telehealth companies ship medication and hope you respond. We combine GLP-1 therapy with protein targets, structured workout programming, and optional 3D body composition tracking to protect lean mass and optimize metabolic response.
        </p>
        <ul className="space-y-4">
          {[
            "Starter and higher doses — same flat monthly price",
            "No dose-based price increases",
            "Muscle-preservation protocol included",
            "Direct access to clinical support"
          ].map((benefit, i) => (
            <li key={i} className="flex items-center gap-3 font-medium text-white/80">
              <div className="bg-brand-teal/20 p-1 rounded-full">
                <Check className="w-4 h-4 text-brand-teal" />
              </div>
              {benefit}
            </li>
          ))}
        </ul>
      </div>

      {/* UPDATED IMAGE CONTAINER: Normal color, no play button, fixed .png extension */}
      <div className="relative aspect-video rounded-[3rem] overflow-hidden shadow-2xl">
        <img 
          src="/ScripMillImg.png" 
          className="w-full h-full object-cover" 
          alt="Telehealth Consultation" 
        />
      </div>
    </div>
  </div>
</section>

        {/* STAGGERED VIDEO SECTIONS */}
        <section className="bg-white py-32 overflow-hidden">
  <div className="max-w-[1450px] mx-auto px-6 md:px-12">
    <div className="space-y-32">
      {/* Row 1 */}
      <div className="grid lg:grid-cols-2 gap-20 items-center">
        <div className="order-2 lg:order-1">
          <h3 className="text-3xl md:text-5xl font-bold serif mb-8 tracking-tight">Why Muscle Loss Matters on GLP-1 Therapy</h3>
          <ul className="space-y-6 mb-12">
            {[
              "Rapid weight loss can reduce lean mass",
              "Low protein intake increases muscle loss risk",
              "Resistance training preserves metabolic rate",
              "Body composition matters more than scale weight"
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-4 text-lg text-brand-dark-blue/70">
                <span className="text-brand-orange font-bold text-2xl leading-none">•</span>
                {item}
              </li>
            ))}
          </ul>
          <a 
            href="https://shop.embracehealth.ai/collections/weight-loss" 
            className="inline-flex items-center gap-3 text-brand-teal font-bold text-lg hover:gap-5 transition-all"
          >
            Begin the 3-Month Metabolic Reset <ArrowRight className="w-5 h-5" />
          </a>
        </div>
        
        <div className="order-1 lg:order-2 relative group">
          <div className="aspect-[4/5] rounded-[3rem] overflow-hidden bg-brand-cream shadow-xl">
            {/* UPDATED: Replaced video with the muscleloss.jpg image */}
            <img 
              src="/muscleloss.png" 
              className="w-full h-full object-cover" 
              alt="Woman focusing on body composition" 
            />
          </div>
          <div className="absolute -bottom-10 -left-10 bg-brand-orange text-white p-8 rounded-3xl shadow-2xl max-w-[280px] hidden md:block animate-reveal">
            <p className="text-sm font-bold uppercase tracking-widest mb-2 opacity-70">Protein First</p>
            <p className="text-xl font-bold serif">Protect your metabolic engine while losing fat.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

              {/* Row 2 */}
              <div className="grid lg:grid-cols-2 gap-20 items-center">
                <div className="relative group">
                  <div className="aspect-[4/5] rounded-[3rem] overflow-hidden bg-brand-cream shadow-xl">
                    <video 
                      autoPlay 
                      loop 
                      muted 
                      playsInline 
                      className="w-full h-full object-cover"
                    >
                      <source src="https://assets.mixkit.co/videos/preview/mixkit-woman-doing-yoga-exercises-in-nature-4506-large.mp4" type="video/mp4" />
                    </video>
                  </div>
                  <div className="absolute -top-10 -right-10 bg-brand-teal text-white p-8 rounded-3xl shadow-2xl max-w-[280px] hidden md:block animate-reveal">
                    <p className="text-sm font-bold uppercase tracking-widest mb-2 opacity-70">Metabolic Reset</p>
                    <p className="text-xl font-bold serif">A structured protocol for lasting results.</p>
                  </div>
                </div>
                <div>
                  <h3 className="text-3xl md:text-5xl font-bold serif mb-8 tracking-tight">Most Patients Choose the 3-Month Metabolic Reset</h3>
                  <div className="space-y-6 mb-12">
                    <div className="bg-brand-cream p-8 rounded-[2.5rem] border-2 border-brand-teal relative overflow-hidden group hover:bg-white transition-all duration-500">
                      <div className="absolute top-0 right-0 bg-brand-teal text-white px-6 py-2 rounded-bl-2xl text-[10px] font-bold uppercase tracking-widest">
                        Most Popular
                      </div>
                      <h4 className="text-2xl font-bold serif mb-2">🔥 3-Month Plan</h4>
                      <p className="text-4xl font-bold serif text-brand-teal mb-4">$635</p>
                      <p className="text-brand-dark-blue/60">Structured protocol. Best for metabolic response.</p>
                    </div>
                    <div className="bg-white p-8 rounded-[2.5rem] border border-brand-dark-blue/5 hover:border-brand-dark-blue/10 transition-all">
                      <h4 className="text-2xl font-bold serif mb-2">Monthly Plan</h4>
                      <p className="text-4xl font-bold serif mb-4">$249</p>
                      <p className="text-brand-dark-blue/60">Flexible month-to-month access.</p>
                    </div>
                  </div>
                  <a 
                    href="https://shop.embracehealth.ai/collections/weight-loss" 
                    className="w-full block py-6 bg-brand-dark-blue text-white font-bold rounded-full text-center hover:bg-brand-teal transition-all shadow-xl"
                  >
                    Select My Plan
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ SECTION */}
        <section className="py-32 max-w-[1000px] mx-auto px-6">
          <h2 className="text-4xl md:text-6xl font-bold serif mb-16 text-center tracking-tighter">Frequently Asked Questions</h2>
          <div className="space-y-8">
            {[
              { q: "Is this safe?", a: "All patients undergo physician review before approval. Our licensed medical providers ensure the treatment is clinically appropriate for you." },
              { q: "Can I cancel?", a: "Yes. No membership lock-in. You can pause or cancel your plan at any time through your patient dashboard." },
              { q: "What if I'm not approved?", a: "You are not charged for medication if our physicians determine the treatment isn't right for you. Your safety is our priority." },
              { q: "Are there any hidden fees?", a: "No. Our pricing is 100% transparent. No membership fees, no consultation fees, and no dose-based price increases." }
            ].map((faq, i) => (
              <div key={i} className="bg-white p-10 rounded-[2.5rem] shadow-sm border border-brand-dark-blue/5">
                <h4 className="text-xl font-bold serif mb-4">{faq.q}</h4>
                <p className="text-brand-dark-blue/60 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="py-32 px-6">
          <div className="max-w-[1200px] mx-auto bg-brand-dark-blue rounded-[4rem] p-12 md:p-24 text-center text-white relative overflow-hidden">
            <div className="absolute inset-0 opacity-10 pointer-events-none">
              <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--brand-teal)_0%,_transparent_70%)]"></div>
            </div>
            <div className="relative z-10">
              <h2 className="text-4xl md:text-7xl font-bold serif mb-8 tracking-tighter leading-tight">Ready to Start Your <br />Metabolic Reset?</h2>
              <p className="text-xl text-white/60 mb-12 max-w-2xl mx-auto">
                Join thousands of patients who have successfully transformed their health with our clinical protocol.
              </p>
              <a 
                href="https://shop.embracehealth.ai/collections/weight-loss" 
                className="inline-block px-12 py-6 bg-brand-teal text-white font-bold rounded-full text-xl hover:scale-105 transition-all shadow-2xl shadow-brand-teal/40"
              >
                Start My Medical Assessment
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default App;
