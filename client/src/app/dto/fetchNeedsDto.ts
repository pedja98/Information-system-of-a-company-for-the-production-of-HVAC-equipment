export interface FetchNeedsDto {
    id: number
    count: number
    status: string
    createdAt: Date
    updatedAt: Date
    material: {
        name: string
        unit: number
        itemNumber: string
    }
    stockkeeper: {
        firstName: string
        lastName: string
    }
    worker: {
        firstName: string
        lastName: string
    } | null
}