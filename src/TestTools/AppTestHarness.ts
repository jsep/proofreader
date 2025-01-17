import {TYPES} from "../Core/Types.ts";
import {FakeAIAssistant} from "../AIAssistant/FakeAIAssistant.ts";
import {container} from "../Core/IOC.ts";

export function buildTestContainer() {
    container.bind(TYPES.AIAssistantGateway).to(FakeAIAssistant);
}
