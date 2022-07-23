export interface FetchMaterialsDto {
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
    } | null
    worker: {
        firstName: string
        lastName: string
    } | null
}