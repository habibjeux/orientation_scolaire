import { Breadcrumbs } from "@/components/breadcrumbs";
import { SchoolAdminForm } from "@/components/forms/school-admin-form";
import PageContainer from "@/components/layout/page-container";
import React from "react";

const breadcrumbItems = [
  { title: "Admin", link: "/admin" },
  { title: "Gérants d'établissement", link: "/admin/school-admins" },
  { title: "Ajouter", link: "/admin/school-admins/new" },
];
export default function page() {
  return (
    <PageContainer scrollable={true}>
      <div className="space-y-4">
        <Breadcrumbs items={breadcrumbItems} />
        <SchoolAdminForm initialData={null} key={null} />
      </div>
    </PageContainer>
  );
}
