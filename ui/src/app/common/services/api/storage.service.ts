import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class StorageService {

    source = localStorage;
    constructor() { }

    public setValue(key, value) {
        this.source.setItem(`${key}`, JSON.stringify(value));
    }

    public getValue(key) {
        let value = this.source.getItem(`${key}`);
        if (value) {
            return JSON.parse(value);
        }
        return null;
    }

    public clearValue(key) {
        this.source.removeItem(`${key}`);
    }

    public resetSession() {
        let keys = ["sessionDetails", "sessionObject"];
        keys.forEach(key => this.clearValue(key))
    }

    public reset() {
        this.source.clear();
    }

    public getUser() {
        return this.getValue("sessionDetails")
    }

    public getSession() {
        return this.getValue("sessionObject")
    }

    public getUserPrefs() {
        return this.getValue("userPrefs")
    }

    public hasAccess() {
        //TODO
    }
    
    public getRole() {
        if (!this.getValue("sessionDetails")) return {};
        return {
            //isPowerUser: this.getValue("sessionDetails")["role"] == "power user",
            //TODO
        }
    }
}
