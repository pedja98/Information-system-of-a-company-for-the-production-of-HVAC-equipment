export interface FetchOrdersDto {
    id: number
    companyName: string
    createdAt: Date
    device: {
        device: string
        status: string
    }
    user: {
        firstName: string
        lastName: string
    }
}