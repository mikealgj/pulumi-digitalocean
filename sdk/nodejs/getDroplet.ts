// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getDroplet(args?: GetDropletArgs, opts?: pulumi.InvokeOptions): Promise<GetDropletResult> & GetDropletResult {
    args = args || {};
    if (!opts) {
        opts = {}
    }

    if (!opts.version) {
        opts.version = utilities.getVersion();
    }
    const promise: Promise<GetDropletResult> = pulumi.runtime.invoke("digitalocean:index/getDroplet:getDroplet", {
        "id": args.id,
        "name": args.name,
        "tag": args.tag,
    }, opts);

    return pulumi.utils.liftProperties(promise, opts);
}

/**
 * A collection of arguments for invoking getDroplet.
 */
export interface GetDropletArgs {
    /**
     * The ID of the Droplet
     */
    readonly id?: number;
    /**
     * The name of the Droplet.
     */
    readonly name?: string;
    /**
     * A tag applied to the Droplet.
     */
    readonly tag?: string;
}

/**
 * A collection of values returned by getDroplet.
 */
export interface GetDropletResult {
    /**
     * Whether backups are enabled.
     */
    readonly backups: boolean;
    readonly createdAt: string;
    /**
     * The size of the Droplets disk in GB.
     */
    readonly disk: number;
    readonly id?: number;
    /**
     * The Droplet image ID or slug.
     */
    readonly image: string;
    /**
     * The Droplets public IPv4 address
     */
    readonly ipv4Address: string;
    /**
     * The Droplets private IPv4 address
     */
    readonly ipv4AddressPrivate: string;
    /**
     * Whether IPv6 is enabled.
     */
    readonly ipv6: boolean;
    /**
     * The Droplets public IPv6 address
     */
    readonly ipv6Address: string;
    /**
     * The Droplets private IPv6 address
     */
    readonly ipv6AddressPrivate: string;
    /**
     * Whether the Droplet is locked.
     */
    readonly locked: boolean;
    /**
     * The amount of the Droplets memory in MB.
     */
    readonly memory: number;
    /**
     * Whether monitoring agent is installed.
     */
    readonly monitoring: boolean;
    readonly name?: string;
    /**
     * Droplet hourly price.
     */
    readonly priceHourly: number;
    /**
     * Droplet monthly price.
     */
    readonly priceMonthly: number;
    /**
     * Whether private networks are enabled.
     */
    readonly privateNetworking: boolean;
    /**
     * The region the Droplet is running in.
     */
    readonly region: string;
    /**
     * The unique slug that indentifies the type of Droplet.
     */
    readonly size: string;
    /**
     * The status of the Droplet.
     */
    readonly status: string;
    readonly tag?: string;
    /**
     * A list of the tags associated to the Droplet.
     */
    readonly tags: string[];
    /**
     * The uniform resource name of the Droplet
     */
    readonly urn: string;
    /**
     * The number of the Droplets virtual CPUs.
     */
    readonly vcpus: number;
    /**
     * List of the IDs of each volumes attached to the Droplet.
     */
    readonly volumeIds: string[];
}
