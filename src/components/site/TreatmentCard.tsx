import * as Icons from "lucide-react";
import { Card } from "@/components/ui/card";

interface Props {
  icon: string;
  title: string;
  desc: string;
}

export function TreatmentCard({ icon, title, desc }: Props) {
  const Icon = (Icons as unknown as Record<string, Icons.LucideIcon>)[icon] ?? Icons.Sparkles;
  return (
    <Card className="group relative overflow-hidden rounded-2xl border-border/60 p-6 transition-all hover:-translate-y-1 hover:shadow-card">
      <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary/15 to-primary-glow/20 text-primary transition-transform group-hover:scale-110">
        <Icon className="h-6 w-6" />
      </div>
      <h3 className="text-lg font-semibold text-foreground">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{desc}</p>
    </Card>
  );
}
