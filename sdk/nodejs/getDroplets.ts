// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getDroplets(args?: GetDropletsArgs, opts?: pulumi.InvokeOptions): Promise<GetDropletsResult> {
    args = args || {};
    if (!opts) {
        opts = {}
    }

    if (!opts.version) {
        opts.version = utilities.getVersion();
    }
    return pulumi.runtime.invoke("digitalocean:index/getDroplets:getDroplets", {
        "filters": args.filters,
        "sorts": args.sorts,
    }, opts);
}

/**
 * A collection of arguments for invoking getDroplets.
 */
export interface GetDropletsArgs {
    /**
     * Filter the results.
     * The `filter` block is documented below.
     */
    readonly filters?: inputs.GetDropletsFilter[];
    /**
     * Sort the results.
     * The `sort` block is documented below.
     */
    readonly sorts?: inputs.GetDropletsSort[];
}

/**
 * A collection of values returned by getDroplets.
 */
export interface GetDropletsResult {
    /**
     * A list of Droplets satisfying any `filter` and `sort` criteria. Each Droplet has the following attributes:
     */
    readonly droplets: outputs.GetDropletsDroplet[];
    readonly filters?: outputs.GetDropletsFilter[];
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly sorts?: outputs.GetDropletsSort[];
}
