import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { EditProfileForm } from "@/features/settings/EditProfileForm";
const SettingsPage = () => {
  return (
    <DashboardLayout title="Settings">
      <Card className="bg-white rounded-2xl">
        <CardContent>
          <Tabs defaultValue="edit-profile" className="w-full">
            <TabsList className="w-full justify-start rounded-none border-b  bg-transparent p-0">
              <TabsTrigger value="edit-profile">Edit Profile</TabsTrigger>
              <TabsTrigger value="preferences">Preferences</TabsTrigger>
              <TabsTrigger value="security">Security</TabsTrigger>
            </TabsList>

            <TabsContent value="edit-profile" className="p-2 md:p-6">
              <EditProfileForm />
            </TabsContent>

            <TabsContent value="preferences" className="p-6">
              <div className="text-[#718EBF]">
                Preferences content coming soon...
              </div>
            </TabsContent>

            <TabsContent value="security" className="p-6">
              <div className="text-[#718EBF]">
                Security settings coming soon...
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </DashboardLayout>
  );
};

export default SettingsPage;
