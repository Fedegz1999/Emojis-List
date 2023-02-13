interface LayoutProps {
    children: React.ReactNode
}






export const Layout: React.FunctionComponent<LayoutProps> = ({children}) => {
return (
<div className="max-w-6xl mx-auto p-5 my-8">
{children}
</div>
)
}