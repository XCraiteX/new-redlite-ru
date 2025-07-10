import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

interface handleProps{
    path: string;
    pathname: string;
    router: AppRouterInstance;
    onReady: () => void;
}

export const handleNavigation = ({ path, router, pathname, onReady }: handleProps) => {
    const getBasePath = (p: string): string => {
        const hashIndex = p.indexOf('#');
        return hashIndex === -1 ? p : p.substring(0, hashIndex);
    };

    const currentBasePath = getBasePath(pathname);
    const targetBasePath = getBasePath(path);

    if (currentBasePath !== targetBasePath) { 
        // setPageVisible(false);
        onReady();

        setTimeout(() => {
            router.push(path);
        }, 400);
    } else {
        router.push(path);
    }
}