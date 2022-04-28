import {
  FlexBox,
  SidebarWrapper,
} from "./Sidebar.styles";
import { Footer } from "./SidebarFooter";
import { SidebarContent } from "./SidebarContent";

export const Sidebar = () => {
  return(
    <SidebarWrapper>
      <FlexBox direction='column' justify='space-between'>
        <SidebarContent />
        <Footer />
      </FlexBox>
    </SidebarWrapper>
  )
}