import { Button } from "@/components/ui/Button";
import { GateMark } from "@/components/ui/GateMark";

export default function NotFound() {
  return (
    <section className="flex min-h-[80svh] flex-col items-center justify-center gap-6 bg-forest px-[var(--gutter)] pt-24 text-center text-cream">
      <GateMark className="h-20 w-20 text-terracotta" />
      <h1 className="text-[clamp(2.6rem,6vw,5rem)]">This path leads nowhere.</h1>
      <p className="text-lg text-cream/75">The page you’re looking for has moved or doesn’t exist.</p>
      <div className="flex flex-wrap justify-center gap-3">
        <Button href="/">Back Home</Button>
        <Button href="/ubud-yoga-centre-class-schedule/" variant="outline-light">
          View Schedule
        </Button>
      </div>
    </section>
  );
}
