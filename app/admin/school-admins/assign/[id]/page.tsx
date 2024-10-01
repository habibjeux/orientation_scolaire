import { Breadcrumbs } from "@/components/breadcrumbs";
import { SchoolAssignForm } from "@/components/forms/school-assign-form";
import PageContainer from "@/components/layout/page-container";
import { get_etablissement_no_assigned } from "@/services/etablissements";
import { get_gerant } from "@/services/gerants";
import { notFound } from "next/navigation";
import React from "react";

const breadcrumbItems = [
  { title: "Admin", link: "/admin" },
  { title: "Etablissement", link: "/admin/schools" },
  { title: "Assigner", link: "/admin/schools/assign" },
];
interface EditSchoolAdminPageProps {
  params: {
    id: string;
  };
}
export default async function AssignSchoolAdminPage({
  params,
}: EditSchoolAdminPageProps) {
  const schoolAdmin = await get_gerant(params.id);

  if (!schoolAdmin) return notFound();

  const etablissements = await get_etablissement_no_assigned();

  if (!etablissements) return notFound();

  return (
    <PageContainer scrollable={true}>
      <div className="space-y-4">
        <Breadcrumbs items={breadcrumbItems} />
        <SchoolAssignForm
          etablissements={etablissements}
          key={params.id}
          schoolId={params.id}
        />
      </div>
    </PageContainer>
  );
}
