import { Breadcrumbs } from "@/components/breadcrumbs";
import { SchoolForm } from "@/components/forms/school-form";
import PageContainer from "@/components/layout/page-container";
import { get_etablissement } from "@/services/etablissements";
import { notFound } from "next/navigation";
import React from "react";

const breadcrumbItems = [
  { title: "Admin", link: "/admin" },
  { title: "Gérants d'établissement", link: "/admin/school-admins" },
  { title: "Modifier", link: "/admin/school-admins/[id]" },
];

interface EditSchoolPageProps {
  params: {
    id: string;
  };
}
export default async function EditSchoolPage({ params }: EditSchoolPageProps) {
  const school = await get_etablissement(params.id);

  if (!school) return notFound();

  return (
    <PageContainer scrollable={true}>
      <div className="space-y-4">
        <Breadcrumbs items={breadcrumbItems} />
        <SchoolForm initialData={school} key={params.id} />
      </div>
    </PageContainer>
  );
}
