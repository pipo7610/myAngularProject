export class AppareilService
{
  appareils = [
    {
      id: 1,
      appareilName : "Ordinateur",
      appareilStatus : "eteint",
      dateCreation : new Date()
    }
    ,
    {
      id: 2,
      appareilName : "Imprimante Laser",
      appareilStatus : "allumé",
      dateCreation : new Date()
    }
    ,
    {
      id: 3,
      appareilName : "GSM",
      appareilStatus : "allumé",
      dateCreation : new Date()
    }
  ];

  switchOnAll()
{
  for ( let app of this.appareils)
    app.appareilStatus = 'allumé';
}

  switchOffAll()
  {
    for ( let app of this.appareils)
      app.appareilStatus = 'eteint';
  }

  switchOnApp(idx: number){
    this.appareils[idx].appareilStatus = 'allumé';
  }
  switchOffApp(idx: number){
    this.appareils[idx].appareilStatus = 'eteint';
  }

  getAppareilbyId(id: number)
  {
     for ( let p of this.appareils)
       if (p.id == id)
         return p;
  }
}
