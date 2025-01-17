import {AIAssistantGateway, AIMessage} from "./AIAssistantGateway.ts";

export class OpenAIAssistant implements AIAssistantGateway {
    async send(message: AIMessage[]): Promise<unknown> {
        console.log(message);
        return []
    }
}