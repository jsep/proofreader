import {Container} from "inversify";
import {TYPES} from "./Types.ts";
import {OpenAIAssistant} from "../AIAssistant/OpenAIAssistant.ts";

export const container = new Container({
    autoBindInjectable: true,
    defaultScope: 'Transient',
})

export function buildContainer(){
    container.bind(TYPES.AIAssistantGateway).to(OpenAIAssistant);
}

