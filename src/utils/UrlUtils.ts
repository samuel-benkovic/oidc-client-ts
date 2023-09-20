// Copyright (c) Brock Allen & Dominick Baier. All rights reserved.
// Licensed under the Apache License, Version 2.0. See LICENSE in the project root for license information.

/**
 * @internal
 */
export class UrlUtils {
    public static readParams(url: string, responseMode: "query" | "fragment" = "query"): URLSearchParams {
        if (!url) throw new TypeError("Invalid URL");
        // the base URL is irrelevant, it's just here to support relative url arguments
        var parsedUrl = new URL(url, "http://127.0.0.1");

        // for the case we have url like  http://127.0.0.1/myApp#/path/to/authcallback?code=myCode&state=myState
        if(responseMode === "fragment"){
            var paramsHash = parsedUrl["hash"].slice(1);
            console.log(paramsHash)
            parsedUrl = new URL(paramsHash, "http://127.0.0.1");
        }

        const params = parsedUrl["search"];
        return new URLSearchParams(params.slice(1));
    }
}
