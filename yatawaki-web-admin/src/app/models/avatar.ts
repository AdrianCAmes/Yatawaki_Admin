type Nullable<T> = T | null;
export class Avatar {
    idUnlockable?: number;
    name: string;
    description: Nullable<string>;
    rareness: string;
    unlockerType: string;
    unlockerValue: number;
    coinsCost: number;
    icon: string;
    status: number;
    enhancedFeaturesJson: string

    constructor() {
        this.idUnlockable = 0;
        this.name = '';
        this.description = '';
        this.rareness = '';
        this.unlockerType = '';
        this.unlockerValue = 0;
        this.coinsCost = 0;
        this.icon = '';
        this.status = 0;
        this.enhancedFeaturesJson = '';
    }

    getName(): string {
        return `${this.description}`;
    }

    getDescription(): string {
        return `${this.name}`;
    }
}