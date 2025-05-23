"use client"

import {  type LucideIcon } from "lucide-react"

import {
  Collapsible,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

export function NavMain({
  items,
  activeSection,
  setActiveSection,
}: {
  items: {
    title: string
    icon?: LucideIcon
    isActive?: boolean
    sectionKey: string // new: unique key for section
  }[]
  activeSection: string
  setActiveSection: (key: string) => void
}) {
  return (
    
    <SidebarGroup>
      <SidebarGroupLabel></SidebarGroupLabel>
      <SidebarMenu >
        {items.map((item) => (
          <Collapsible
            key={item.title}
            asChild
            defaultOpen={item.isActive}
            className=" bg-zinc-950 text-slate-100   "
          >
            <SidebarMenuItem>
              <CollapsibleTrigger asChild>
                <SidebarMenuButton
                  tooltip={item.title}
                  onClick={() => setActiveSection(item.sectionKey)}
                  className={ activeSection === item.sectionKey ? "text-slate-100 bg-neutral-800" : "" }
                  
                >
                  {item.icon && <item.icon />}
                  <span >{item.title}</span>
                </SidebarMenuButton>
              </CollapsibleTrigger>
            </SidebarMenuItem>
          </Collapsible>
        ))}
      </SidebarMenu>
      
    </SidebarGroup>
  )
}
