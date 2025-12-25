import { TecnologiesType } from "./TecnologiesType";

export type ProjectType ={
    title: string;
    description: string;
    details: string;
    tecnologies: TecnologiesType[];
    images: string[];
    github: string;
    deploy: string;
}