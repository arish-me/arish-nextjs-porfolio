import { MainNavItem, SidebarNavItem } from "types/nav"

export interface DocsConfig {
  mainNav: MainNavItem[]
  sidebarNav: SidebarNavItem[]
}

export const docsConfig: DocsConfig = {
  mainNav: [
    {
      title: "Blogs",
      href: "/blogs",
    },
    {
      title: "Projects",
      href: "/projects",
    },
    {
      title: "Learning",
      href: "/videos",
    },
    {
      title: "About",
      href: "/about",
    },
    {
      title: "Startups",
      href: "/startups",
    },
  ],
  sidebarNav: [
    {
      title: "Arish.Me",
      items: [
        {
          title: "Blogs",
          href: "/blogs",
          items: [],
        },
        {
          title: "Projects",
          href: "/projects",
          items: [],
        },

        {
          title: "About Me",
          href: "/about",
          items: [],
        },
        {
          title: "Startups",
          href: "/startups",
          items: [],
        },
      ],
    },
  ],

}