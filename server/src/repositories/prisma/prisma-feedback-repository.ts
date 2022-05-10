import { prisma } from "../../prisma";
import { FeddbackCreateData, FeedbacksRepository } from "../feedbacks-repository";

export class PrismaFeedbacksRepository implements FeedbacksRepository {
    async create({ comment, type, screenshot }: FeddbackCreateData) {
        await prisma.feedback.create({
            data: {
                comment, 
                type,
                screenshot
            }
        })
    }

}