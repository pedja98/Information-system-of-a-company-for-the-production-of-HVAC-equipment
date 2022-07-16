export interface FetchMaterialsDto {
    id: number
    itemNumber: string
    name: string
    supplierCode: string
    supplierItemNumber: string
    stock: {
        capacity: number
        count: number
        unit: string
    }
}