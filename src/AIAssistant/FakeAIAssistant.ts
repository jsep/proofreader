import {AIAssistantGateway, AIMessage} from "./AIAssistantGateway.ts";

export class FakeAIAssistant implements AIAssistantGateway {
    async send(message: AIMessage[]): Promise<unknown> {
        console.log(message);
        return []
    }
}