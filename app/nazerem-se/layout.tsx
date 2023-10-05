import { Content } from "@/components/layouts/content"

export default function MdxLayout({ children }: { children: React.ReactNode }) {
   // Create any shared layout or styles here
   return <Content className="">{children}</Content>
}
