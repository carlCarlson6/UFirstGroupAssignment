import { model, Schema } from "mongoose";

const EpaDataSchema = new Schema(
    {
        host: String,
        date: {
            day: Number,
            hour: Number,
            minute: Number,
            second: Number
        },
        request: {
            method: String,
            url: String,
            protocol: String,
            vProtocol: String
        },
        response: {
            code: Number,
            docSize: Number
        }
    },
    {collection: 'EpaData'}
)

export const EpaDataModel = model('EpaData', EpaDataSchema);