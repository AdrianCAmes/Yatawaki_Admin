export class Achievement {
    private idUnlockable: number;
    private name: string;
    private description: string;
    private rareness: string;
    private unlockerType: string;
    private unlockerValue: number;
    private coinsCost: number;
    private icon: string;
    private status: number;
    private enhancedFeaturesJson: string

    constructor(idUnlockable: number, name: string, description: string, rareness: string, unlockerType:string, unlockerValue:number,
        coinsCost:number, icon:string, status:number, enhancedFeaturesJson:string) {
        this.idUnlockable = idUnlockable;
        this.name = name;
        this.description = description;
        this.rareness = rareness;
        this.unlockerType = unlockerType;
        this.unlockerValue = unlockerValue;
        this.coinsCost = coinsCost;
        this.icon = icon;
        this.status = status;
        this.enhancedFeaturesJson = enhancedFeaturesJson;
    }
    
}