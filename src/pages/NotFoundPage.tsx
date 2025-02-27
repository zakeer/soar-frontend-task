"use client";

import { useEffect } from "react";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function NotFoundPage() {
  const navigate = useNavigate();

  useEffect(() => {
    const redirectTimer = setTimeout(() => {
      navigate("/");
    }, 5000); // Redirect after 5 seconds

    return () => clearTimeout(redirectTimer);
  }, [navigate]);

  return (
    <DashboardLayout title="Not Found">
      <Card className="max-w-2xl mx-auto mt-20">
        <CardContent className="flex flex-col items-center p-6 text-center">
          <h1 className="text-4xl font-bold text-[#343C6A] mb-4">
            404 - Page Not Found
          </h1>
          <p className="text-xl text-[#718EBF] mb-8">
            Oops! The page you're looking for doesn't exist. You'll be
            redirected to the dashboard shortly.
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
