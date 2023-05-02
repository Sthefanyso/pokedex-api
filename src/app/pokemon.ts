
export interface Pokemon
{
    id: number;
    name: string;
    height: number;
    weight: number;

    type:{
        name: string;
    }[];
    
    abilities:{
        name: string;
    }[];

    stats:{
        base_stat: number;
        stat:{
            name: string;
        }[];
    }

}