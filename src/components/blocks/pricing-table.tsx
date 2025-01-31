import * as React from "react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { CheckIcon, ArrowRightIcon } from "@radix-ui/react-icons"
import NumberFlow from "@number-flow/react"

export type PlanLevel = "starter" | "intermediate" | "all" | string

export interface PricingFeature {
  name: string
  included: PlanLevel | null
}

export interface PricingPlan {
  name: string
  level: PlanLevel
  price: {
    OneOff: number
    Installment: number
  }
  popular?: boolean
}

export interface PricingTableProps
  extends React.HTMLAttributes<HTMLDivElement> {
  features: PricingFeature[]
  plans: PricingPlan[]
  onPlanSelect?: (plan: PlanLevel) => void
  defaultPlan?: PlanLevel
  defaultInterval?: "One Off" | "Instalment"
  containerClassName?: string
  buttonClassName?: string
}

export function PricingTable({
  features,
  plans,
  onPlanSelect,
  defaultPlan = "all",
  defaultInterval = "One Off",
  className,
  containerClassName,
  buttonClassName,
  ...props
}: PricingTableProps) {
  const [isInstalment, setIsInstalment] = React.useState(defaultInterval === "Instalment")
  const [selectedPlan, setSelectedPlan] = React.useState<PlanLevel>(defaultPlan)

  const handlePlanSelect = (plan: PlanLevel) => {
    setSelectedPlan(plan)
    onPlanSelect?.(plan)
  }

  React.useEffect(() => {
    if (selectedPlan !== "all" && isInstalment) {
      setIsInstalment(false)
    }
  }, [selectedPlan, isInstalment])

  return (
    <section
      id="plans"
      className={cn(
        "bg-background text-foreground",
        "py-12 sm:py-24 md:py-32 px-4",
        "fade-bottom overflow-hidden pb-0",
      )}
    >
      <div
        className={cn("w-full max-w-3xl mx-auto px-4", containerClassName)}
        {...props}
      >
        <div className="flex justify-end mb-4 sm:mb-8">
          <div className="inline-flex items-center gap-2 text-xs sm:text-sm">
            <button
              type="button"
              onClick={() => setIsInstalment(false)}
              className={cn(
                "px-3 py-1 rounded-md transition-colors",
                !isInstalment ? "bg-zinc-100 dark:bg-zinc-800" : "text-zinc-500",
              )}
            >
              One Off
            </button>
            <button
              type="button"
              onClick={() => setIsInstalment(true)}
              className={cn(
                "px-3 py-1 rounded-md transition-colors",
                isInstalment ? "bg-zinc-100 dark:bg-zinc-800" : "text-zinc-500",
                selectedPlan !== "all" && "opacity-50 cursor-not-allowed"
              )}
              disabled={selectedPlan !== "all"}
            >
              2 x Instalments
            </button>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          {plans.map((plan) => (
            <button
              key={plan.name}
              type="button"
              onClick={() => handlePlanSelect(plan.level)}
              className={cn(
                "flex-1 p-4 rounded-xl text-left transition-all",
                "border border-zinc-200 dark:border-zinc-800",
                selectedPlan === plan.level &&
                  "ring-2 ring-blue-500 dark:ring-blue-400",
              )}
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium">{plan.name}</span>
                {plan.popular && (
                  <span className="text-xs bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 px-2 py-0.5 rounded-full">
                    Popular
                  </span>
                )}
              </div>
              <div className="flex items-baseline gap-1">
                {isInstalment && plan.level !== "all" ? (
                  <span className="text-2xl font-bold">No Instalment</span>
                ) : (
                  <NumberFlow
                    format={{
                      style: "currency",
                      currency: "GBP",
                    }}
                    value={isInstalment ? plan.price.Installment : plan.price.OneOff}
                    className="text-2xl font-bold"
                  />
                )}
                {(!isInstalment || plan.level === "all") && (
                  <span className="text-sm font-normal text-zinc-500">
                    /{isInstalment ? "Instalment" : "One Off"}
                  </span>
                )}
              </div>
              {plan.level === "all" && (
                <div className="text-xs text-zinc-500 mt-1">
                  Available in Instalments
                </div>
              )}
            </button>
          ))}
        </div>

        <div className="border border-zinc-200 dark:border-zinc-800 rounded-xl overflow-hidden">
          <div className="overflow-x-auto">
            <div className="min-w-[640px] divide-y divide-zinc-200 dark:divide-zinc-800">
              <div className="flex items-center p-4 bg-zinc-50 dark:bg-zinc-900">
                <div className="flex-1 text-sm font-medium">Features</div>
                <div className="flex items-center gap-8 text-sm">
                  {plans.map((plan) => (
                    <div
                      key={plan.level}
                      className="w-16 text-center font-medium"
                    >
                      {plan.name}
                      <br />
                      <span className="text-xs text-zinc-500">
                        {plan.level === "starter" && "2 weeks"}
                        {plan.level === "intermediate" && "4 weeks"}
                        {plan.level === "all" && "8 weeks"}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
              {features.map((feature) => (
                <div
                  key={feature.name}
                  className={cn(
                    "flex items-center p-4 transition-colors",
                    shouldShowCheck(feature.included, selectedPlan) &&
                      "bg-blue-50/50 dark:bg-blue-900/20",
                  )}
                >
                  <div className="flex-1 text-sm">{feature.name}</div>
                  <div className="flex items-center gap-8 text-sm">
                    {plans.map((plan) => (
                      <div
                        key={plan.level}
                        className={cn(
                          "w-16 flex justify-center",
                          plan.level === selectedPlan && "font-medium",
                        )}
                      >
                        {shouldShowCheck(feature.included, plan.level) ? (
                          <CheckIcon className="w-5 h-5 text-blue-500" />
                        ) : (
                          <span className="text-zinc-300 dark:text-zinc-700">
                            -
                          </span>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8 text-center">
          <Button
            className={cn(
              "w-full sm:w-auto bg-blue-500 hover:bg-blue-600 px-8 py-2 rounded-xl cursor-pointer",
              buttonClassName,
            )}
            onClick={() => document.getElementById('plans')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Get started with {plans.find((p) => p.level === selectedPlan)?.name}
            <ArrowRightIcon className="w-4 h-4 ml-2" />
          </Button>
        </div>

        <div className="mt-8">
          <img 
            src="/victoria-to-bromley-south.png" 
            alt="Victoria to Bromley South transport map" 
            className="mx-auto max-w-xs md:max-w-md rounded-lg border border-gray-200 dark:border-gray-800 shadow-lg"
          />
        </div>
      </div>
    </section>
  )
}

function shouldShowCheck(
  included: PricingFeature["included"],
  level: string,
): boolean {
  if (included === null) return false;
  
  // Define our tier hierarchy
  const tiers = ["starter", "intermediate", "all"];
  
  // If both values are in our known tiers, compare their positions
  if (tiers.includes(included) && tiers.includes(level)) {
    const includedIndex = tiers.indexOf(included);
    const levelIndex = tiers.indexOf(level);
    return levelIndex >= includedIndex;
  }

  // Fallback for custom tiers - only show if exact match
  return included === level;
}
