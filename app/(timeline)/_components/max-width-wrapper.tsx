import { cn } from "@/lib/utils";

interface MaxWidthWrapperProps {
  children: React.ReactNode;
  className?: string;
}

export default function MaxWidthWrapper({
  children,
  className,
}: MaxWidthWrapperProps) {
  return (
    <div className={cn("mx-auto max-w-7xl size-full px-5", className)}>
      {children}
    </div>
  );
}
