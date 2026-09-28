import { fraunces } from "../fonts";

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return <div className={fraunces.variable}>{children}</div>;
}
