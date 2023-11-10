export interface Root {
    Properties: Property[]
  }
  
  export interface Property {
    image: string
    tag: string
    rooms: number
    beds: number
    baths: number
    sqFt: number
    title: string
    description: string
    price: number
  }