import { cn } from "@/lib/utils";
import { UserNav } from "./user-nav";
import { MobileSidebarSchoolAdmin } from "./mobile-sidebar-school-admin";

export default function HeaderSchoolAdmin() {
  return (
    <header className="sticky inset-x-0 top-0 w-full">
      <nav className="flex items-center justify-between px-4 py-2 md:justify-end">
        <div className={cn("block lg:!hidden")}>
          <MobileSidebarSchoolAdmin />
        </div>
        <div className="flex items-center gap-2">
          <UserNav />
        </div>
      </nav>
    </header>
  );
}
