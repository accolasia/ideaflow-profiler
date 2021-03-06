import { CapacityDistribution } from './capacityDistribution';
import { SubTask } from './subTask';
import { Metric } from './metric';

export class IdeaFlowStory {
    constructor(
        public relativePath: string,
        public description: string,
        public relativePositionInSeconds: number,
        public durationInSeconds: number,
        public position: Date,
        public contextTags: Array<any>,
        public painTags: Array<any>,

        public capacityDistribution:CapacityDistribution,
        public subtasks: Array<SubTask>,

        public allMetrics: Array<Metric>,
        public dangerMetrics: Array<Metric>,
    ){}
}
