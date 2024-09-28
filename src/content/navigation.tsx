type NavType = {
    name: string,
    href: string,
    current: boolean
}[]

type NavTypeOmit<T extends string> = Omit<NavType[number], T>[];

type UserNavigation = NavTypeOmit<"current">

export const navigation: NavType = [
    { name: 'Dashboard', href: '#', current: true },
    { name: 'Team', href: '#', current: false },
    { name: 'Projects', href: '#', current: false },
    { name: 'Calendar', href: '#', current: false },
    { name: 'Reports', href: '#', current: false },
  ]

export const userNavigation: UserNavigation = [
    { name: 'Your Profile', href: '#' },
    { name: 'Settings', href: '#' },
    { name: 'Sign out', href: '#' },
  ]