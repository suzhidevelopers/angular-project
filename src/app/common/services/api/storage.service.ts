import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class StorageService {

    source = localStorage;
    constructor() { }

    public setValue(key, value) {
        this.source.setItem(`AC_${key}`, JSON.stringify(value));
    }

    public getValue(key) {
        let value = this.source.getItem(`AC_${key}`);
        if (value) {
            return JSON.parse(value);
        }
        return null;
    }

    public clearValue(key) {
        this.source.removeItem(`AC_${key}`);
    }

    public resetSession() {
        let keys = ["sessionDetails", "sessionObject", "notifications"];
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

    public getOrgId() {
        return this.getValue("sessionObject")["orgId"]
    }

    public hasAccess() {
        return this.getRole().isPowerUser || this.getRole().isAdminUser;
    }

    public getPlatform() {
        return {
            isAzure: this.getValue("sessionObject")["loginPlatform"] == "azure",
            isAWS: this.getValue("sessionObject")["loginPlatform"] == "aws",
            isGCP: this.getValue("sessionObject")["loginPlatform"] == "gcp"
        }
    }
    public getLoginPlatform(){
        return this.getValue("sessionObject")["loginPlatform"];
    }
    public getRole() {
        if (!this.getValue("sessionDetails")) return {};
        return {
            isPowerUser: this.getValue("sessionDetails")["role"] == "power user",
            isAdminUser: this.getValue("sessionDetails")["role"] == "admin user",
            isDeveloper: this.getValue("sessionDetails")["role"] == "developer",
        }
    }
}
