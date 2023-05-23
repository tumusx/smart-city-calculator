// @ts-ignore
enum TypeModel {
    SMART_CITY = "SMART_CITY",
    INDICATOR_CITY = "INDICATOR_CITY",
}

class CityIndicators {
    name: string
    consumeEnergyResidential: number;
    totalPopulationCity: number;
    totalInhabitantsCity: number;
    totalConsumeEnergyEdificesPublic: number;
    totalAreaEdifierPublic: number;
    totalEnergyConsumePhotoVoltaic: number;
    totalConsumeEnergy: number;
    totalInterruptionsConsumer: number;
    typeModel: TypeModel
    totalConsumerAttend: number;
    totalTimeInterruptionsEnergy: number;

    constructor(name: string, consumeEnergyResidential: number,
                totalPopulationCity: number, totalInhabitantsCity: number,
                totalConsumeEnergyEdificesPublic: number,
                totalAreaEdifierPublic: number,
                totalEnergyConsumePhotoVoltaic: number,
                totalConsumeEnergy: number,
                totalInterruptionsConsumer: number,
                totalConsumerAttend: number,
                typeModel: TypeModel,
                totalTimeInterruptionsEnergy: number,
    ) {
        this.name = name;
        this.consumeEnergyResidential = consumeEnergyResidential;
        this.totalPopulationCity = totalPopulationCity;
        this.totalInhabitantsCity = totalInhabitantsCity;
        this.totalConsumeEnergyEdificesPublic = totalConsumeEnergyEdificesPublic;
        this.totalAreaEdifierPublic = totalAreaEdifierPublic;
        this.totalEnergyConsumePhotoVoltaic = totalEnergyConsumePhotoVoltaic;
        this.totalConsumeEnergy = totalConsumeEnergy;
        this.totalInterruptionsConsumer = totalInterruptionsConsumer;
        this.totalConsumerAttend = totalConsumerAttend;
        this.typeModel = typeModel
        this.totalTimeInterruptionsEnergy = totalTimeInterruptionsEnergy;
    }

    getTypeModel() {
        return this.typeModel;
    }

}

