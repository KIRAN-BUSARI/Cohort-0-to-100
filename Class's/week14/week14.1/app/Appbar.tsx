export default function Appbar({ children }:Readonly<{children: React.ReactNode}>) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <div className="p-4 border-b">
                    medium
                </div>
                {children}
            </body>
        </html>
    )
}