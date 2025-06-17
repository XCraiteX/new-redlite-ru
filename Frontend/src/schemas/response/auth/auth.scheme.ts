type UserScheme = {
    login: string
    developer: boolean
    created: string
}

export type ProfileScheme = {
    id: number
    user: UserScheme
}

export type AuthScheme = {
    status: string
    detail: string
}