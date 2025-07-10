import { api } from "@/api/api";
import { UserScheme } from "@/schemas/response/auth/auth.scheme";
import { useQuery } from "@tanstack/react-query";

export type MeScheme = {
    status: string;
    user: UserScheme;
}

const me = async (): Promise<MeScheme> => {
    return await api.get('me')
}

export const useMe = () => useQuery(
    {
        queryKey: ['me'],
        queryFn: async () => {
            return await me();
        },
        select: data => data.user
    }
)