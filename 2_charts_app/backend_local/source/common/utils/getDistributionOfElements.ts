import { Distribution } from "../types";

export const getDistributionOfElements = (elements: Array<any>): Distribution => {
    let distribution: Distribution = [];
    const uniqueElements: Array<any> = elements.filter((element, index, self) => index === self.indexOf(element));
    
    uniqueElements.forEach(uniqueElement => {
        const repetitions = elements.filter(elemet => elemet === uniqueElement).length
        distribution.push({value: uniqueElement, count: repetitions})
    })

    return distribution;
}