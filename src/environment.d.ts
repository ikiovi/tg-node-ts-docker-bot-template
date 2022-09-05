/* process.env type */

declare global {
    namespace NodeJS {
        interface ProcessEnv {
            TOKEN: string;
        }
    }
}

export { }