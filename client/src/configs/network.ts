
declare global {
    interface Window {
        _env_: {
            [name: string]: string
        }
    }
}

const SERVER_ENDPOINT:string = window._env_ ? window._env_.SERVER_ENDPOINT : "http://localhost:8080"

export default {
    SERVER_ENDPOINT
}