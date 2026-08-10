import { site } from "@/lib/content";

export function LogoMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <polygon
        points="20,2 30.78,8.5 34.64,20.5 30.78,32.5 20,39 9.22,32.5 5.36,20.5 9.22,8.5"
        className="fill-petrol-700"
      />
      <circle cx="15.5" cy="18" r="3.2" className="fill-white" />
      <circle cx="24.5" cy="18" r="3.2" className="fill-white" />
      <path
        d="M13 26c1.8 2.4 4.2 3.6 7 3.6s5.2-1.2 7-3.6"
        stroke="white"
        strokeWidth="2.2"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
}

export function Logo({
  className,
  showByline = false,
}: {
  className?: string;
  showByline?: boolean;
}) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className ?? ""}`}>
      <LogoMark className="h-8 w-8 shrink-0" />
      <span className="flex flex-col leading-none">
        <span className="text-lg font-bold tracking-tight text-petrol-950">
          {site.brand}
        </span>
        {showByline && (
          <span className="text-[11px] font-medium text-petrol-500">
            by {site.parentBrand}
          </span>
        )}
      </span>
    </span>
  );
}
