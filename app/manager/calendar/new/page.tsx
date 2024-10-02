import { Breadcrumbs } from "@/components/breadcrumbs";
import { CalendrierForm } from "@/components/forms/calendar-form";
import { SchoolForm } from "@/components/forms/school-form";
import PageContainer from "@/components/layout/page-container";
import React from "react";

const breadcrumbItems = [
  { title: "Manager", link: "/manager" },
  { title: "Calendrier", link: "/manager/calendar" },
  { title: "Ajouter", link: "/manager/calendar/new" },
];
export default function page() {
  return (
    <PageContainer scrollable={true}>
      <div className="space-y-4">
        <Breadcrumbs items={breadcrumbItems} />
        <CalendrierForm initialData={null} key={null} />
      </div>
    </PageContainer>
  );
}
