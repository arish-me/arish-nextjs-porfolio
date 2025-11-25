/* eslint-disable */

// Studio layout - just passes through children since root layout handles the conditional rendering
export default function StudioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

