import { PropsWithChildren } from "react";
import { colors } from "@/constants/colors";
import HttpErrorBoundary from "@/layout/HttpErrorBoundary";
import { Spacing } from "@/components";

export default function PageLayout({ children }: PropsWithChildren) {
  return (
    <div style={{
      ...container,
      background: colors.background
    }}>
      <Spacing size={20} />
      <HttpErrorBoundary>
        {children}
      </HttpErrorBoundary>
    </div>
  );
}

const container = {
  maxWidth: "100%",
  width: "100%",
  padding: 0,
  margin: 0,
  height: "100dvh",
}
