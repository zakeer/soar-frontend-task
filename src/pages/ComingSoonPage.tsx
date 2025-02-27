import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface ComingSoonProps {
  title: string;
}

export default function ComingSoonPage({ title }: ComingSoonProps) {
  const navigate = useNavigate();

  return (
    <DashboardLayout title={title}>
      <Card className="max-w-2xl mx-auto mt-20">
        <CardContent className="flex flex-col items-center p-6 text-center">
          <h1 className="text-4xl font-bold text-[#343C6A] mb-4">
            Coming Soon
          </h1>
          <p className="text-xl text-[#718EBF] mb-8">
            We're working hard to bring you the {title} feature. Stay tuned!
          </p>
          <Button
            onClick={() => navigate("/")}
            className="flex items-center gap-2 bg-[#343C6A] hover:bg-[#343C6A]/90 text-white"
          >
            <ArrowLeft size={20} />
            Back to Dashboard
          </Button>
        </CardContent>
      </Card>
    </DashboardLayout>
  );
}
