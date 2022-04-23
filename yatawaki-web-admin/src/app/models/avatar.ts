export class Avatar {
    name: string;
    description: string;
    rareness: string;
    unlockerType: string;
    unlockerValue: number;
    coinsCost: number;
    icon: string;
    status: number;
    enhancedFeaturesJson: string

    constructor() {
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