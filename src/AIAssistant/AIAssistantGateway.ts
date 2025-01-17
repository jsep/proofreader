
export interface AIMessage {
    message: string;
    role: 'user' | 'system'
}

export interface AIAssistantGateway {
    send(messages:AIMessage[]): Promise<unknown>
}