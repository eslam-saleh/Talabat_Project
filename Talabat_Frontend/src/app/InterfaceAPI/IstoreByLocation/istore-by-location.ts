export interface IstoreByLocation {
        id: number,
        state:string,
        area:string,
        street:string,
        storeId: number,
        store: {
            id:number,
            name:string,
            shortDescribtion:string,
            describtion:string,
            image:string,
            isActive:boolean,
            storeCatogeryId:number,
            userId:number
          
        }
    }

