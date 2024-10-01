import { Breadcrumbs } from "@/components/breadcrumbs";
import { SchoolForm } from "@/components/forms/school-form";
import PageContainer from "@/components/layout/page-container";
import React from "react";

const breadcrumbItems = [
  { title: "Admin", link: "/admin" },
  { title: "Etablissement", link: "/admin/schools" },
  { title: "Ajouter", link: "/admin/schools/new" },
];
export default function page() {
  return (
    <PageContainer scrollable={true}>
      <div className="space-y-4">
        <Breadcrumbs items={breadcrumbItems} />
        <SchoolForm initialData={null} key={null} />
      </div>
    </PageContainer>
  );
}
