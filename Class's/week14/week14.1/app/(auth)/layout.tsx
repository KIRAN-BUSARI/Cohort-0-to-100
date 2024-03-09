export default function Layout({ children }: Readonly<{ children: React.ReactNode }>) {

    // children is just to pass oter code from page.tsx
    return (
        <>
            <div className="border-b text-center">
                Login now to get 20% off
            </div>
            <div className="">{children}</div>
        </>
    );
}

// () just it ignore the rouuting 
