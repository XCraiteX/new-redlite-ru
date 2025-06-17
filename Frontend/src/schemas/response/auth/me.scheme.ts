type MeUser = {
    login: string
    developer: boolean
    created: string
}

export type MeScheme = {
    status: string
    user: MeUser
}