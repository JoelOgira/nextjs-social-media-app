import { Loader2 } from "lucide-react";
import { Button, ButtonProps } from "./ui/button";

interface LoadingButtonProps extends ButtonProps {
  loading: boolean;
}

export default function LoadingButton({
  loading,
  disabled,
  className,
  ...props
}: LoadingButtonProps) {
  return (
    <Button className="w-full">
      {loading && <Loader2 className="animate-spin size-5" />}
      {props.children}
    </Button>
  );
}
