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
    href: "/school-admin",
    icon: "dashboard",
    label: "Dashboard",
  },
  {
    title: "Etudiants",
    href: "/school-admin/students",
    icon: "user",
    label: "user",
  },
  {
    title: "Professeurs",
    href: "/school-admin/teachers",
    icon: "teacher",
    label: "employee",
  },
  {
    title: "Login",
    href: "/",
    icon: "login",
    label: "login",
  },
];
