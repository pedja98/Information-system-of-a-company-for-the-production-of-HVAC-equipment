export interface FetchMaterialsDto {
    id: number
    itemNumber: string
    name: string
    supplierCode: string
    supplierItemNumber: string
    unit: string
    stock: {
        capacity: number
        count: number
    }
}