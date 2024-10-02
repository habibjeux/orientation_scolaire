"use client";
import { Breadcrumbs } from "@/components/breadcrumbs";
import PageContainer from "@/components/layout/page-container";
import { CalendrierClient } from "@/components/tables/calendar-tables/client";
import { get_calendar_by_etablissement } from "@/services/calendriers";
import { Calendrier } from "@/types/models";
import { useEffect, useState } from "react";

export default function CalendarPage() {
  const etablissement_id = 2;
  const [calendriers, setCalendriers] = useState<Calendrier[]>([]);
  const breadcrumbItems = [
    { title: "Manager", link: "/manager" },
    { title: "Calendrier", link: "/admin/calendar" },
  ];
  useEffect(() => {
    get_calendar_by_etablissement(etablissement_id.toString()).then((res) => {
      setCalendriers(res);
    });
  }, []);
  return (
    <PageContainer>
      <div className="space-y-2">
        <Breadcrumbs items={breadcrumbItems} />
        <CalendrierClient data={calendriers} />
      </div>
    </PageContainer>
  );
}
