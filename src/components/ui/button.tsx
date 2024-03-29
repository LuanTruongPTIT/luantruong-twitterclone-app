import { forwardRef } from "react";
import cn from "clsx";

import type { ComponentPropsWithRef } from "react";
import { Loading } from "./loading";

type ButtonProps = ComponentPropsWithRef<"button"> & {
  loading?: boolean;
};

// eslint-disable-next-line react/display-name
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, loading, disabled, children, ...rest }, ref) => {
    const isDisabled = loading || disabled;

    return (
      <button
        className={cn(
          "custom-button main-tab",
          loading && "relative !text-transparent disabled:cursor-wait",
          className
        )}
        type="button"
        disabled={isDisabled}
        ref={ref}
        {...rest}
      >
        {loading && (
          <Loading
            iconClassName="h-5 w-5"
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          />
        )}
        {children}
      </button>
    );
  }
);
