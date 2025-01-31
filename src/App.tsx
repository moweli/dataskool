import "./App.css";
import { HeroSection } from "@/components/blocks/hero-section-dark";
import { TestimonialsSection } from "@/components/blocks/testimonials-with-marquee";
import { Cta10 } from "@/components/blocks/shadcnblocks-com-cta10";
import { FeaturesSectionWithHoverEffects } from "./components/blocks/feature-section-with-hover-effects";
import { MarqueeAnimation } from "@/components/ui/marquee-effect";
import { PricingTable } from "@/components/blocks/pricing-table";
import { SocialLinks } from "@/components/ui/social-links";

const testimonials = [
  {
    author: {
      name: "Adam Ali",
      handle: "@adamali",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",

    },
    text: "Started with the SQL Fundamentals weekend course and ended up doing the full Job Ready package. The hands-on practice and small class size made such a difference - landed a junior data analyst role at Lloyds after just 8 weeks. Worth every penny!",
//    href: "https://twitter.com/emmaai",
  },
  {
    author: {
      name: "Fatima Ahmed",
      handle: "@fahmed29",
      avatar:
              "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face",

    },
    text: "Was stuck doing basic Excel at work, but the Python + SQL weekend courses changed everything. The instructor actually explained things properly, unlike YouTube tutorials. Just passed my DP-900 exam and got a £12K salary bump!",
//    href: "https://twitter.com/davidtech",
  },
  {
    author: {
      name: "Mohammed Al-Rashid",
      handle: "",
      avatar:
-        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face",
    },
    text: "Brilliant CV review session - they helped me highlight my new SQL skills perfectly. Went from retail management to junior BI developer in 3 months. The interview prep workshop was spot on for tech role questions.",
  },
];

const demoData = {
  heading: "Ready to Get Started?",
  description:
    "Join our hands-on workshop and learn to write queries with confidence. Perfect for beginners and career switchers.",
  buttons: {
    primary: {
      text: "Get Started",
      url: "https://www.shadcnblocks.com",
    },
    secondary: {
      text: "Learn More",
      url: "https://www.shadcnblocks.com",
    },
  },
};

function MarqueeEffectDouble() {
  return (
    <div className="w-full">
      <div className="bg-green-500 py-4">
        <MarqueeAnimation direction="left" baseVelocity={0.5}>
        Data Jobs Average £50K in London • 230k Data Jobs • SQL is the #1 Required Tech Skill in 2024 •
        </MarqueeAnimation>
      </div>
      <div className="bg-purple-500 py-4">
        <MarqueeAnimation direction="right" baseVelocity={0.5}>
        100+ Success Stories in 2024 • Real Projects • Interview Prep & CV Workshop Included
        </MarqueeAnimation>
      </div>
    </div>
  );
}

const features = [
  { name: "1. SQL Fundamentals", included: "starter" },
  { name: "2. Hands On labs", included: "starter" },
  { name: "3. Python Fundamentals", included: "intermediate" },
  { name: "4. Discord Community Access", included: "intermediate" },
  { name: "5. SQL Intermediate ", included: "all" },
  { name: "6. Microsoft Cloud Fundamentals DP-900 Exam", included: "all" },
  { name: "7. Interview Prep Workshop", included: "all" },
  { name: "8. CV Review Session", included: "all" },
  { name: "9. LinkedIn Profile Review", included: "all" },
  { name: "10.Practice Tests", included: "all" },
];

const plans = [
  {
    name: "Starter",
    price: { OneOff: 200, Installment: 0 },
    level: "starter",
  },
  {
    name: "Intermediate",
    price: { OneOff: 300, Installment: 0 },
    level: "intermediate",
  },
  {
    name: "Job Ready",
    price: { OneOff: 600, Installment: 300 },
    level: "all",
    popular: true,

  },
];

const socials = [
  {
    name: "Instagram",
    image: "https://link-hover-lndev.vercel.app/instagram.png",
  },
  {
    name: "LinkedIn",
    image: "https://link-hover-lndev.vercel.app/linkedin.png",
  },
  {
    name: "Spotify",
    image: "https://link-hover-lndev.vercel.app/spotify.png",
  },
  {
    name: "TikTok",
    image: "https://link-hover-lndev.vercel.app/tiktok.png",
  },
];

function SocialLinksDemo() {
  return (
    <main className="relative flex w-full items-start justify-center px-4 py-10 md:items-center">
      <SocialLinks socials={socials} />
    </main>
  );
}

function App() {
  return (
    <>
      <HeroSection
        title="Welcome to Data Schoool"
        subtitle={{
          regular: "85% of Online Courses End in Failure",
          gradient: " Don't Be Another Statistic",
        }}
        description="Break free from the online learning trap with our proven in-person data bootcamp"
        ctaText="Get Started"
        ctaHref="#plans"
        bottomImage={{
          light: "https://www.launchuicomponents.com/app-light.png",
          dark: "https://www.launchuicomponents.com/app-dark.png",
        }}
        gridOptions={{
          angle: 65,
          opacity: 0.4,
          cellSize: 50,
          lightLineColor: "#4a4a4a",
          darkLineColor: "#2a2a2a",
        }}
      />
      <MarqueeEffectDouble />
      <TestimonialsSection
        title="Your £45K Data Career Starts This Saturday"
        description="Skip the 6-month online courses. Get certified and hired in weeks with London's highest-rated in-person data training."
        testimonials={testimonials}
      />
      <Cta10 {...demoData} />
      <FeaturesSectionWithHoverEffects />
      <PricingTable
        features={features}
        plans={plans}
        defaultPlan="all"
        defaultInterval="One Off"
        onPlanSelect={(plan) => console.log("Selected plan:", plan)}
        containerClassName="py-12"
        buttonClassName="bg-primary hover:bg-primary/90"
      />
      <SocialLinksDemo />
    </>
  );
}

export default App;
