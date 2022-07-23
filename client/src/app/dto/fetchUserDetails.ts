export interface FetchUserDetailsDto {
    id: number
    firstName: string
    lastName: string
    email: string
    type: string
    dateOfBirth: Date
    pic: string | null
    createdAt: Date
    activities: {
        logedIn: Date,
        logedOut: Date
    }[]
}