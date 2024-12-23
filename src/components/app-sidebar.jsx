import { Calendar, Home, Inbox, Atom, Gauge, ChartArea, Video, Fan } from 'lucide-react'
import ThemeToggle from '@/components/theme/ThemeToggle'
import Social from '@/components/Social'
import logo from '@public/logo.webp'
import Image from 'next/image'
import { Sidebar, SidebarContent, SidebarGroup, SidebarGroupContent, SidebarGroupLabel, SidebarMenu, SidebarMenuButton, SidebarMenuItem, SidebarFooter } from '@/components/ui/sidebar'

// Menu items.
const items = [
  {
    title: 'Home',
    url: '/',
    icon: Home
  },
  {
    title: 'Software Basics',
    url: '/software-basics',
    icon: Inbox
  },
  {
    title: 'ADC Overview',
    url: '/adc-overview',
    icon: Calendar
  },
  {
    title: 'Gauges',
    url: '/gauges',
    icon: Gauge
  },
  {
    title: 'Graphing',
    url: '/graphing',
    icon: ChartArea
  },
  {
    title: 'Speed Density',
    url: '/speed-density',
    icon: Atom
  },
  {
    title: 'Boost Control',
    url: '/boost-control',
    icon: Fan
  },
  {
    title: 'Demos',
    url: '/demos',
    icon: Video
  }
]

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>
            <Image src={logo} alt='Nismotronic' />
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map(item => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <ThemeToggle />
        <Social />
      </SidebarFooter>
    </Sidebar>
  )
}
