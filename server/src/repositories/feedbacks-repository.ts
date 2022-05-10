export interface FeddbackCreateData {
    type: string
    comment: string
    screenshot?: string
}

export interface FeedbacksRepository {
    create: (data: FeddbackCreateData) => Promise<void>
}