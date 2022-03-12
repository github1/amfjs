// Type definitions for amfjs
// Project: https://github.com/emilkm/amfjs
// Definitions by: Emil Malinov
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace amf {
    const classes: any[];
    const clients: Client[];

    function registerClass(name: string, clazz: any);
    function getClient(destination: string): Client;

    class Client {
        constructor(destination: string, endpoint: string, timeout?: number);
        setSessionId(value: string);
        releaseQueue();
        invoke<Response>(source: string, operation: string, params: any, block, nobatch): Promise<Response>;
    }

    interface ResponseFactory {
        new (code, message, detail, data, $scope): Response;
    }
    const Response: ResponseFactory;
    interface Response {
        $scope: any;
        code: number;
        message: string;
        detail: any;
        data: any;
    }

    class Writer {
        data: number[];
    }

    class Serializer {
        writer: Writer;
        constructor();
        writeObject(object: unknown): void;
    }

    class Deserializer {
        constructor(data: Uint8Array);
        readObject<T>(): T;
    }
}

