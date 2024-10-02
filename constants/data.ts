import { NavItem } from "../types";

export const navItems: NavItem[] = [
  {
    title: "Dashboard",
    href: "/admin",
    icon: "dashboard",
    label: "Dashboard",
  },
  {
    title: "Etudiants",
    href: "/admin/students",
    icon: "user",
    label: "user",
  },
  {
    title: "Professeurs",
    href: "/admin/teachers",
    icon: "teacher",
    label: "employee",
  },
  {
    title: "Etablissements",
    href: "/admin/schools",
    icon: "school",
    label: "school",
  },
  {
    title: "Gérants d'établissements",
    href: "/admin/school-admins",
    icon: "school-admin",
    label: "school-admin",
  },
  {
    title: "Login",
    href: "/",
    icon: "login",
    label: "login",
  },
];

export const navItemsSchoolAdmin: NavItem[] = [
  {
    title: "Dashboard",
    href: "/manager",
    icon: "dashboard",
    label: "Dashboard",
  },
  {
    title: "Calendrier",
    href: "/manager/calendar",
    icon: "calendar",
    label: "class",
  },
  {
    title: "Classes",
    href: "/manager/classes",
    icon: "class",
    label: "class",
  },
  {
    title: "Matieres",
    href: "/manager/subjects",
    icon: "subject",
    label: "subject",
  },
  {
    title: "Eleves",
    href: "/manager/students",
    icon: "user",
    label: "user",
  },
  {
    title: "Professeurs",
    href: "/manager/teachers",
    icon: "teacher",
    label: "employee",
  },
  {
    title: "Inscription",
    href: "/manager/registration",
    icon: "register",
    label: "register",
  },
  {
    title: "Login",
    href: "/",
    icon: "login",
    label: "login",
  },
];
