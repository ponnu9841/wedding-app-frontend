import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";

const CustomTooltip = ({
  tooltip,
  children,
  variant = "secondary",
  triggerClassName,
}: {
  children: React.ReactNode;
  tooltip: string;
  variant?: string;
  triggerClassName?: string;
}) => {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild className={cn(triggerClassName)}>{children}</TooltipTrigger>
        <TooltipContent variant={variant} className="max-w-[55vw] w-full">
          {tooltip}
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default CustomTooltip;
