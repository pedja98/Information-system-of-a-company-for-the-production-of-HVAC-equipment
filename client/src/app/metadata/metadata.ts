export const userTypes: any[] = [
    { value: 'admin', label: 'Admin' },
    { value: 'storekeeper', label: 'Magacinski radnik' },
    { value: 'production-worker', label: 'Proizvodni radnik' },
    { value: 'production-manager', label: 'Šef proizvodnje' },
    { value: 'head-of-procurement', label: 'Šef nabavke' },
];

export const devices: any[] = [
    { value: 'air-chamber', label: 'Klima komora' },
    { value: 'cooling-chamber', label: 'Rashladna komora' },
]

export const deviceWidth: any[] = [
    { value: '1.2', label: '1.2' },
    { value: '1.5', label: '1.5' },
    { value: '1.8', label: '1.8' },
    { value: '2.1', label: '2.1' },
    { value: '2.4', label: '2.4' },
    { value: '2.7', label: '2.7' },
    { value: '3.0', label: '3.0' },
]

export const deviceLength: any[] = [
    { value: '1.2', label: '1.2' },
    { value: '1.5', label: '1.5' },
    { value: '1.8', label: '1.8' },
    { value: '2.1', label: '2.1' },
    { value: '2.4', label: '2.4' },
    { value: '2.7', label: '2.7' },
    { value: '3.0', label: '3.0' },
]

export const deviceHeight: any[] = [
    { value: '2.1', label: '2.1' },
    { value: '2.4', label: '2.4' },
    { value: '2.7', label: '2.7' },
    { value: '3.0', label: '3.0' },
]

export const coolingChamberModels: any[] = [
    { value: 'zero', label: 'Nula' },
    { value: 'minus', label: 'Minus' },
]

export const airChamberModels: any[] = [
    { value: 'K1', label: 'K1' },
    { value: 'K2-H', label: 'K2-H' },
    { value: 'K2-P', label: 'K2-P' },
    { value: 'K2-S', label: 'K2-S' },
    { value: 'K3-H', label: 'K3-H' },
    { value: 'K3-P', label: 'K3-P' },
    { value: 'K3-S', label: 'K3-S' },
    { value: 'K4-H', label: 'K4-H' },
    { value: 'K4-P', label: 'K4-P' },
    { value: 'K4-S', label: 'K4-S' },
    { value: 'K5-H', label: 'K5-H' },
    { value: 'K5-P', label: 'K5-P' },
    { value: 'K5-S', label: 'K5-S' },
    { value: 'K6-H', label: 'K6-H' },
    { value: 'K6-P', label: 'K6-P' },
    { value: 'K6-S', label: 'K6-S' },
    { value: 'K7-H', label: 'K7-H' },
    { value: 'K7-P', label: 'K7-P' },
    { value: 'K7-S', label: 'K7-S' },
    { value: 'K8-H', label: 'K8-H' },
    { value: 'K8-P', label: 'K8-P' },
    { value: 'K8-S', label: 'K8-S' },
    { value: 'K9-H', label: 'K9-H' },
    { value: 'K9-P', label: 'K9-P' },
    { value: 'K9-S', label: 'K9-S' },
    { value: 'K10-H', label: 'K10-H' },
    { value: 'K10-P', label: 'K10-P' },
    { value: 'K10-S', label: 'K10-S' },
]

export const recuperators: any[] = [
    { value: '', label: 'nema' },
    { value: '1d', label: 'Dijagonalni' },
    { value: '1r', label: 'Rotacioni' },
]

export const itemCount: any[] = [
    { value: '5', label: 'Ništa' },
    { value: '1', label: '0-200' },
    { value: '2', label: '200-500' },
    { value: '3', label: '500-1000' },
    { value: '4', label: 'preko 1000' }
]

export const pipeDevices: any[] = [
    { value: '', label: 'Ništa' },
    { value: 'air-chamber', label: 'Klima komora' },
    { value: 'cooling-chamber', label: 'Rashladna komora' },
]

export const orderStatuses: any[] = [
    { value: '', label: 'Ništa' },
    { value: 'ORDER_CREATED', label: 'Nalog je napravljen' },
    { value: 'START_OF_PRODUCTION', label: 'Početak proizvodnje' },
    { value: 'END_OF_PRODUCTION', label: 'Kraj proizvodnje' },
]