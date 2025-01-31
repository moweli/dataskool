import { cn } from "@/lib/utils";
import {
  IconAdjustmentsBolt,
  // IconCloud,
  IconHeart,
  IconRouteAltLeft,
  IconTerminal2,
  IconCurrencyPound,
  IconUsers,
  IconCalendar,
  IconBriefcase,
} from "@tabler/icons-react";

export function FeaturesSectionWithHoverEffects() {
  const features = [
    {
      title: "Job Program",
      description:
        "Land a Data role within 6-9 months. 65% of our graduates secure positions within 6-9 months",
      icon: <IconCurrencyPound />,
    },
    {
      title: "Industry-Relevant SQL & Python",
      description:
        "No faff, no outdated material. Learn exactly what FTSE 100 companies are looking for. Perfect for career changers and upskilling professionals.",
      icon: <IconTerminal2 />,
    },
    {
      title: "Fast-Track to £45K+ Starting Salary",
      description:
        "Our graduates typically start at £45,000-£55,000. Skip the junior positions - we'll help you land proper tech roles at leading UK firms.",
      icon: <IconAdjustmentsBolt />,
    },
    {
      title: "Hands-on Projects, Not Just Theory",
      description:
        "Work with real datasets from British companies. Build a portfolio that properly showcases your skills to employers, not just another certificate.",
      icon: <IconRouteAltLeft />,
    },
    {
      title: "Small Class Sizes",
      description:
        "Maximum 10 students per class. Stuck on a problem? Your instructor is right there in the room - no more waiting for forum responses or YouTube tutorials.",
      icon: <IconUsers />,
    },
    {
      title: "Weekend Classes That Work",
      description:
        "Keep your current job whilst training , Full-day Saturdays. Perfect for London professionals.",
      icon: <IconCalendar />,
    },
    {
      title: "Full Career Support Package",
      description:
        "Mock interviews with UK tech recruiters. CV optimisation from industry experts. We're with you until you land that role - simple as that.",
      icon: <IconBriefcase />,
    },
    {
      title: "Join Our Free Career Webinar",
      description:
        "Live every Wednesday at 6:30PM. Learn about SQL careers, salaries, and how to break into tech. Plus exclusive course discount for attendees.",
      icon: <IconHeart />,
    },
  ];
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  relative z-10 py-10 max-w-7xl mx-auto">
      {features.map((feature, index) => (
        <Feature key={feature.title} {...feature} index={index} />
      ))}
    </div>
  );
}

const Feature = ({
  title,
  description,
  icon,
  index,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}) => {
  return (
    <div
      className={cn(
        "flex flex-col lg:border-r  py-10 relative group/feature dark:border-neutral-800",
        (index === 0 || index === 4) && "lg:border-l dark:border-neutral-800",
        index < 4 && "lg:border-b dark:border-neutral-800"
      )}
    >
      {index < 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      {index >= 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      <div className="mb-4 relative z-10 px-10 text-neutral-600 dark:text-neutral-400">
        {icon}
      </div>
      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-700 group-hover/feature:bg-blue-500 transition-all duration-200 origin-center" />
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-neutral-800 dark:text-neutral-100">
          {title}
        </span>
      </div>
      <p className="text-sm text-neutral-600 dark:text-neutral-300 max-w-xs relative z-10 px-10">
        {description}
      </p>
    </div>
  );
};
