import { TecnologiesType } from "./TecnologiesType";

export type ProjectType ={
    title: string;
    description: {es: string, en: string};
    features: {es: string[], en: string[]}
    details: string;
    tecnologies: TecnologiesType[];
    images: string[];
    github: string;
    deploy: string;
}