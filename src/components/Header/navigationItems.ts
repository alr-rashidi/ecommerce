type NavigationItemsType = {
  title: string;
  href: string;
  isActive?: boolean;
}[];
export const navigationItems: NavigationItemsType = [
  {
    title: "Home",
    href: "/",
    isActive: true,
  },
  {
    title: "About",
    href: "/about",
  },
  {
    title: "Contact us",
    href: "/cuntact-us",
  },
  {
    title: "Blog",
    href: "/blog",
  },
];
