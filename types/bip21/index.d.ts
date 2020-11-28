// Type definitions for bip21 v1.1.2
// Project: https://github.com/bitcoinjs/bip21
// Definitions by: Stefan Huber <https://github.com/stefanhuber>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace bip21 {
	type params = {
		address:string,
		amount?:number,
		label?: string,
		message?: string,
		lightning?: string,
		pj?: string,
		pjos?: string
	};

    export function decode(uri:string) : params;
    export function encode(address:string,options?:any) : string;
}

export = bip21;
