import * as React from "react";
import { cn } from "@/lib/utils";
import { MapPinIcon } from "@heroicons/react/24/outline";

export function TransportMap({
  className,
  ...props
}: React.ImgHTMLAttributes<HTMLImageElement>) {
  return (
    <>
      <div className="flex justify-center items-center py-12 px-4">
        <h2 className="max-w-[720px] text-3xl text-center font-semibold leading-tight sm:text-5xl sm:leading-tight">
          Only 16min from Victoria Station
        </h2>
      </div>
      <div className="space-y-4">
        <img
          {...props}
          className={cn(
            "mx-auto max-w-xs md:max-w-md rounded-xl border border-gray-200 dark:border-gray-800 shadow-lg transition-all hover:shadow-xl",
            className
          )}
        />
        <div className="mx-auto max-w-xs md:max-w-md p-4 bg-gray-50 dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-800 shadow-sm">
          <div className="flex items-start gap-3">
            <MapPinIcon className="w-5 h-5 mt-0.5 text-primary-600 dark:text-primary-400" />
            <div className="space-y-2 text-left">
              <h3 className="font-semibold text-gray-900 dark:text-gray-100">
                Newman Flexible Workspace
              </h3>
              <div className="space-y-1">
                <p className="text-sm text-gray-600 dark:text-gray-400 flex items-center gap-1.5">
                  <span className="sr-only">Address:</span>
                  Commercial House, 2 Newman Rd
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400 flex items-center gap-1.5">
                  <span className="sr-only">Postcode:</span>
                  <span className="inline-block">Bromley BR1 1RJ</span>
                </p>
              </div>
              <a
                href="https://maps.app.goo.gl/..."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-2 text-primary-600 dark:text-primary-400 hover:underline text-sm font-medium">
                Get Directions →
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
