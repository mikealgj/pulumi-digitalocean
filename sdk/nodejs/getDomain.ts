// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import { input as inputs, output as outputs } from "./types";
import * as utilities from "./utilities";

/**
 * Get information on a domain. This data source provides the name, TTL, and zone
 * file as configured on your DigitalOcean account. This is useful if the domain
 * name in question is not managed by this provider or you need to utilize TTL or zone
 * file data.
 *
 * An error is triggered if the provided domain name is not managed with your
 * DigitalOcean account.
 */
export function getDomain(args: GetDomainArgs, opts?: pulumi.InvokeOptions): Promise<GetDomainResult> {
    if (!opts) {
        opts = {}
    }

    if (!opts.version) {
        opts.version = utilities.getVersion();
    }
    return pulumi.runtime.invoke("digitalocean:index/getDomain:getDomain", {
        "name": args.name,
    }, opts);
}

/**
 * A collection of arguments for invoking getDomain.
 */
export interface GetDomainArgs {
    /**
     * The name of the domain.
     */
    readonly name: string;
}

/**
 * A collection of values returned by getDomain.
 */
export interface GetDomainResult {
    /**
     * The uniform resource name of the domain
     * * `zoneFile`: The zone file of the domain.
     */
    readonly domainUrn: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly ttl: number;
    readonly zoneFile: string;
}
