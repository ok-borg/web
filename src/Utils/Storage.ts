export class Session {
    static set(key:string, value:any) {
        window.sessionStorage.setItem(key, JSON.stringify(value));
    }

    static get(key:string):any {
        return JSON.parse(window.sessionStorage.getItem(key));
    }

    static remove(key:string) {
        window.sessionStorage.removeItem(key);
    }
}