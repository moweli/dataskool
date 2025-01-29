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
      name: "Emma Thompson",
      handle: "@emmaai",
      avatar:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face",
    },
    text: "Using this AI platform has transformed how we handle data analysis. The speed and accuracy are unprecedented.",
    href: "https://twitter.com/emmaai",
  },
  {
    author: {
      name: "David Park",
      handle: "@davidtech",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    },
    text: "The API integration is flawless. We've reduced our development time by 60% since implementing this solution.",
    href: "https://twitter.com/davidtech",
  },
  {
    author: {
      name: "Sofia Rodriguez",
      handle: "@sofiaml",
      avatar:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face",
    },
    text: "Finally, an AI tool that actually understands context! The accuracy in natural language processing is impressive.",
  },
];

const demoData = {
  heading: "Ready to Get Started?",
  description:
    "Join thousands of satisfied customers using our platform to build amazing websites.",
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
        <MarqueeAnimation direction="left" baseVelocity={1}>
          Data Mastery • AI-Powered Analytics • Real-Time Insights •
        </MarqueeAnimation>
      </div>
      <div className="bg-purple-500 py-4">
        <MarqueeAnimation direction="right" baseVelocity={1}>
          Book a Free Consultation • Transform Your Business •
        </MarqueeAnimation>
      </div>
    </div>
  );
}

const features = [
  { name: "Basic Analytics", included: "starter" },
  { name: "Up to 5 team members", included: "starter" },
  { name: "Basic support", included: "starter" },
  { name: "Advanced Analytics", included: "pro" },
  { name: "Up to 20 team members", included: "pro" },
  { name: "Priority support", included: "pro" },
  { name: "Custom integrations", included: "all" },
  { name: "Unlimited team members", included: "all" },
  { name: "24/7 phone support", included: "all" },
];

const plans = [
  {
    name: "Starter",
    price: { monthly: 15, yearly: 144 },
    level: "starter",
  },
  {
    name: "Pro",
    price: { monthly: 49, yearly: 470 },
    level: "pro",
    popular: true,
  },
  {
    name: "Enterprise",
    price: { monthly: 99, yearly: 990 },
    level: "all",
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
        title="Welcome to Our Platform"
        subtitle={{
          regular: "Transform your ideas into ",
          gradient: "beautiful digital experiences",
        }}
        description="Transform your ideas into reality with our comprehensive suite of development tools and resources."
        ctaText="Get Started"
        ctaHref="/signup"
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
        title="Trusted by developers worldwide"
        description="Join thousands of developers who are already building the future with our AI platform"
        testimonials={testimonials}
      />
      <Cta10 {...demoData} />
      <FeaturesSectionWithHoverEffects />
      <PricingTable
        features={features}
        plans={plans}
        defaultPlan="pro"
        defaultInterval="monthly"
        onPlanSelect={(plan) => console.log("Selected plan:", plan)}
        containerClassName="py-12"
        buttonClassName="bg-primary hover:bg-primary/90"
      />
      <SocialLinksDemo />
    </>
  );
}

export default App;
