
type ICodeceptCallback = (i: CodeceptJS.I) => void;

declare const actor: () => CodeceptJS.I;
declare const Feature: (string: string) => void;
declare const Scenario: (string: string, callback: ICodeceptCallback) => void;
declare const Before: (callback: ICodeceptCallback) => void;
declare const After: (callback: ICodeceptCallback) => void;
declare const within: (selector: string, callback: Function) => void;

declare namespace CodeceptJS {
  export interface I {
    sendGet: (url, headers, reject) => any; 
    sendPost: (url, headers, payload, reject) => any; 
    debug: (msg) => any; 
    debugSection: (section, msg) => any; 
    say: (msg) => any; 

  }
}

declare module "codeceptjs" {
    export = CodeceptJS;
}
