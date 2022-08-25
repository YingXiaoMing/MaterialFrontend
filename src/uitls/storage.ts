interface storageFunType {
    getItem(key: string): any;
    setItem(key: string,value: string): void;
    removeItem(key: string): void;
    clear(): void;
}



class sessionStorageProxy implements storageFunType {
    private storage : storageFunType;
    constructor(storageModel: storageFunType)
    {
        this.storage = storageModel;
    }
    getItem(key: string): any {
        return JSON.parse(this.storage.getItem(key)) || null
    }
    setItem(key: string, value: string): void {
        this.storage.setItem(key, JSON.stringify(value))
    }
    removeItem(key: string): void {
        this.storage.removeItem(key)
    }
    clear(): void {
        this.storage.clear();
    }
}



// 本地储存也是一样，继承一次就好了
class localStorageProxy extends sessionStorageProxy implements storageFunType {
    constructor(storageModel: storageFunType)
    {
        super(storageModel)
    }
}

export const SessionStorage = new sessionStorageProxy(sessionStorage); // 调用系统的session
export const LocalStorage = new localStorageProxy(localStorage);






