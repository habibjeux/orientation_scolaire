import { Breadcrumbs } from "@/components/breadcrumbs";
import { CalendrierForm } from "@/components/forms/calendar-form";
import PageContainer from "@/components/layout/page-container";
import { get_calendar } from "@/services/calendriers";
import { formatDateForInput } from "@/utils/dateFormater";
import { notFound } from "next/navigation";
import React from "react";

const breadcrumbItems = [
  { title: "Manager", link: "/manager" },
  { title: "Calendrier", link: "/manager/calendar" },
  { title: "Modifier", link: "/manager/calendar/[id]" },
];

interface EditSchoolPageProps {
  params: {
    id: string;
  };
}
export default async function EditSchoolPage({ params }: EditSchoolPageProps) {
  const calendar = await get_calendar(params.id);
  const schoolId = 2;
  if (!calendar) return notFound();

  if (calendar.etablissement_id !== schoolId) return notFound();

  calendar.debut = formatDateForInput(calendar.debut);
  calendar.fin = formatDateForInput(calendar.fin);

  return (
    <PageContainer scrollable={true}>
      <div className="space-y-4">
        <Breadcrumbs items={breadcrumbItems} />
        <CalendrierForm initialData={calendar} key={params.id} />
      </div>
    </PageContainer>
  );
}
