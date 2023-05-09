
export interface Pokemon
{
    id: number;
    name: string;
    height: number;
    weight: number;

    type:{
        type: any;
        name: string;
    }[];
    
    abilities:{
        ability: any;
        name: string;
    }[];

    stats:{
        base_stat: number;
        stat:{
            name: string;
        }[];
    }

}