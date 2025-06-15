'use client';

import { useState, useEffect } from "react";

interface ClientsOnlyProps {
    children: React.ReactNode;
}

const ClientsOnly: React.FC<ClientsOnlyProps> = ({ children }) => {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) {
        return null; // Optional: <div>Loading...</div>
    }

    return <>{children}</>;
};

export default ClientsOnly;

