import type {Metadata,Viewport} from 'next'
import './globals.css'
export const metadata:Metadata={title:'Savita Pal | Marriage Biodata',description:'An introduction to Savita Pal (Pooja), her family, education, and interests.',robots:{index:false,follow:false},openGraph:{title:'Savita Pal | Marriage Biodata',description:'An introduction to Savita, her roots, and her journey.',images:['/savita.png']},icons:{icon:'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><text y=".9em" font-size="90">🌸</text></svg>'}}
export const viewport:Viewport={themeColor:'#110c18',colorScheme:'dark'}
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body>{children}</body></html>}
