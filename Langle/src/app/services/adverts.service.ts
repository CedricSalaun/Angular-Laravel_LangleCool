import { Injectable } from '@angular/core';

export class AdListing{
    title = 'Titre';
    content = 'Contenu';
    price = 5.00;
    image = 'une url on vera plus tar';
}


@Injectable()
export class AdvertsService{
    //TODO dans le constructeur on met le lien de la database en mode class ex 'private db: AngularLaravelAtabase'
    constructor(){
    }
    public pushAd(){
        console.log("push ad")
    }
    public updateAd(ad, data){
        console.log('updating ad'+ ad, data);
    }

    //add(): blablabla<AdListing>{
    // const adDefault = new AdListing();
    // const adKey = this.db.list('/abs').push(this.adDefault).key;
    // return this.db.object('/abs/'+adKey);
    //
    // updateAdd(ad:blabalbla<AdListing>, data: any){
    //     return ad.update(data);
    // }
}
