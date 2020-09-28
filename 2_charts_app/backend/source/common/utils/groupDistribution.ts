import { Distribution } from "../types";

export const groupDistribution = (min: number, max: number, span: number, distribution: Distribution): Distribution => {
    let groupedDistribution: Distribution = [];
    const ranges = Array.from(new Array(span), (x, i) => i);​​​​​​
    
    ranges.forEach((range) => {
        const minRange = range*(max/span)+min;
        const maxRange = (range+1)*(max/span)+min;
        const filterDistribution = distribution.filter(element => minRange <= element.value && element.value < maxRange );
        groupedDistribution.push({value: `${minRange}-${(maxRange-1)}`, count: filterDistribution.length})
    });

    return groupedDistribution;
}