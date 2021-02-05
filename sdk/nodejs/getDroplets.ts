// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import { input as inputs, output as outputs } from "./types";
import * as utilities from "./utilities";

/**
 * Get information on Droplets for use in other resources, with the ability to filter and sort the results.
 * If no filters are specified, all Droplets will be returned.
 *
 * This data source is useful if the Droplets in question are not managed by the provider or you need to
 * utilize any of the Droplets' data.
 *
 * Note: You can use the `digitalocean.Droplet` data source to obtain metadata
 * about a single Droplet if you already know the `id`, unique `name`, or unique `tag` to retrieve.
 *
 * ## Example Usage
 *
 * Use the `filter` block with a `key` string and `values` list to filter images.
 *
 * For example to find all Droplets with size `s-1vcpu-1gb`:
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as digitalocean from "@pulumi/digitalocean";
 *
 * const small = pulumi.output(digitalocean.getDroplets({
 *     filters: [{
 *         key: "size",
 *         values: ["s-1vcpu-1gb"],
 *     }],
 * }, { async: true }));
 * ```
 *
 * You can filter on multiple fields and sort the results as well:
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as digitalocean from "@pulumi/digitalocean";
 *
 * const small_with_backups = pulumi.output(digitalocean.getDroplets({
 *     filters: [
 *         {
 *             key: "size",
 *             values: ["s-1vcpu-1gb"],
 *         },
 *         {
 *             key: "backups",
 *             values: ["true"],
 *         },
 *     ],
 *     sorts: [{
 *         direction: "desc",
 *         key: "created_at",
 *     }],
 * }, { async: true }));
 * ```
 */
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
