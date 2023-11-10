import { PropertiesImage } from "./properties.image";
export interface Properties {
    id: number;
    area_sqm: number;
    number_of_bathrooms: string;
    number_of_rooms: number;
    parking: string;
    price: string;
    project_id: number;
    code: string;
    user_id: number;
    district: string;
    commune: string;
    province: string;
    title: string;
    description: string;
    listing_status: string;
    property_type: string;
    real_estate_type: string;
    property_image: PropertiesImage []
  }