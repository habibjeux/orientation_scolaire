import { Breadcrumbs } from "@/components/breadcrumbs";
import { SchoolAdminForm } from "@/components/forms/school-admin-form";
import PageContainer from "@/components/layout/page-container";
import { get_gerant } from "@/services/gerants";
import { formatDate, formatDateForInput } from "@/utils/dateFormater";
import { notFound } from "next/navigation";
import React from "react";

const breadcrumbItems = [
  { title: "Admin", link: "/admin" },
  { title: "Etablissement", link: "/admin/schools" },
  { title: "Modifier", link: "/admin/schools/[id]" },
];

interface EditSchoolAdminPageProps {
  params: {
    id: string;
  };
}
export default async function EditSchoolAdminPage({
  params,
}: EditSchoolAdminPageProps) {
  const schoolAdmin = await get_gerant(params.id);

  if (!schoolAdmin) return notFound();
  schoolAdmin.date_naissance = formatDateForInput(schoolAdmin.date_naissance);

  return (
    <PageContainer scrollable={true}>
      <div className="space-y-4">
        <Breadcrumbs items={breadcrumbItems} />
        <SchoolAdminForm initialData={schoolAdmin} key={params.id} />
      </div>
    </PageContainer>
  );
}
