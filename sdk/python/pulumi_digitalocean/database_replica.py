# coding=utf-8
# *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import json
import warnings
import pulumi
import pulumi.runtime
from typing import Union
from . import utilities, tables

class DatabaseReplica(pulumi.CustomResource):
    cluster_id: pulumi.Output[str]
    """
    The ID of the original source database cluster.
    """
    database: pulumi.Output[str]
    """
    Name of the replica's default database.
    """
    host: pulumi.Output[str]
    """
    Database replica's hostname.
    """
    name: pulumi.Output[str]
    """
    The name for the database replica.
    """
    password: pulumi.Output[str]
    """
    Password for the replica's default user.
    """
    port: pulumi.Output[float]
    """
    Network port that the database replica is listening on.
    """
    private_host: pulumi.Output[str]
    """
    Same as `host`, but only accessible from resources within the account and in the same region.
    """
    private_uri: pulumi.Output[str]
    """
    Same as `uri`, but only accessible from resources within the account and in the same region.
    """
    region: pulumi.Output[str]
    """
    DigitalOcean region where the replica will reside.
    """
    size: pulumi.Output[str]
    """
    Database Droplet size associated with the replica (ex. `db-s-1vcpu-1gb`).
    """
    tags: pulumi.Output[list]
    uri: pulumi.Output[str]
    """
    The full URI for connecting to the database replica.
    """
    user: pulumi.Output[str]
    """
    Username for the replica's default user.
    """
    def __init__(__self__, resource_name, opts=None, cluster_id=None, name=None, region=None, size=None, tags=None, __props__=None, __name__=None, __opts__=None):
        """
        Provides a DigitalOcean database replica resource.

        > This content is derived from https://github.com/terraform-providers/terraform-provider-digitalocean/blob/master/website/docs/r/database_replica.html.markdown.

        :param str resource_name: The name of the resource.
        :param pulumi.ResourceOptions opts: Options for the resource.
        :param pulumi.Input[str] cluster_id: The ID of the original source database cluster.
        :param pulumi.Input[str] name: The name for the database replica.
        :param pulumi.Input[str] region: DigitalOcean region where the replica will reside.
        :param pulumi.Input[str] size: Database Droplet size associated with the replica (ex. `db-s-1vcpu-1gb`).
        """
        if __name__ is not None:
            warnings.warn("explicit use of __name__ is deprecated", DeprecationWarning)
            resource_name = __name__
        if __opts__ is not None:
            warnings.warn("explicit use of __opts__ is deprecated, use 'opts' instead", DeprecationWarning)
            opts = __opts__
        if opts is None:
            opts = pulumi.ResourceOptions()
        if not isinstance(opts, pulumi.ResourceOptions):
            raise TypeError('Expected resource options to be a ResourceOptions instance')
        if opts.version is None:
            opts.version = utilities.get_version()
        if opts.id is None:
            if __props__ is not None:
                raise TypeError('__props__ is only valid when passed in combination with a valid opts.id to get an existing resource')
            __props__ = dict()

            if cluster_id is None:
                raise TypeError("Missing required property 'cluster_id'")
            __props__['cluster_id'] = cluster_id
            __props__['name'] = name
            __props__['region'] = region
            __props__['size'] = size
            __props__['tags'] = tags
            __props__['database'] = None
            __props__['host'] = None
            __props__['password'] = None
            __props__['port'] = None
            __props__['private_host'] = None
            __props__['private_uri'] = None
            __props__['uri'] = None
            __props__['user'] = None
        super(DatabaseReplica, __self__).__init__(
            'digitalocean:index/databaseReplica:DatabaseReplica',
            resource_name,
            __props__,
            opts)

    @staticmethod
    def get(resource_name, id, opts=None, cluster_id=None, database=None, host=None, name=None, password=None, port=None, private_host=None, private_uri=None, region=None, size=None, tags=None, uri=None, user=None):
        """
        Get an existing DatabaseReplica resource's state with the given name, id, and optional extra
        properties used to qualify the lookup.

        :param str resource_name: The unique name of the resulting resource.
        :param str id: The unique provider ID of the resource to lookup.
        :param pulumi.ResourceOptions opts: Options for the resource.
        :param pulumi.Input[str] cluster_id: The ID of the original source database cluster.
        :param pulumi.Input[str] database: Name of the replica's default database.
        :param pulumi.Input[str] host: Database replica's hostname.
        :param pulumi.Input[str] name: The name for the database replica.
        :param pulumi.Input[str] password: Password for the replica's default user.
        :param pulumi.Input[float] port: Network port that the database replica is listening on.
        :param pulumi.Input[str] private_host: Same as `host`, but only accessible from resources within the account and in the same region.
        :param pulumi.Input[str] private_uri: Same as `uri`, but only accessible from resources within the account and in the same region.
        :param pulumi.Input[str] region: DigitalOcean region where the replica will reside.
        :param pulumi.Input[str] size: Database Droplet size associated with the replica (ex. `db-s-1vcpu-1gb`).
        :param pulumi.Input[str] uri: The full URI for connecting to the database replica.
        :param pulumi.Input[str] user: Username for the replica's default user.
        """
        opts = pulumi.ResourceOptions.merge(opts, pulumi.ResourceOptions(id=id))

        __props__ = dict()

        __props__["cluster_id"] = cluster_id
        __props__["database"] = database
        __props__["host"] = host
        __props__["name"] = name
        __props__["password"] = password
        __props__["port"] = port
        __props__["private_host"] = private_host
        __props__["private_uri"] = private_uri
        __props__["region"] = region
        __props__["size"] = size
        __props__["tags"] = tags
        __props__["uri"] = uri
        __props__["user"] = user
        return DatabaseReplica(resource_name, opts=opts, __props__=__props__)
    def translate_output_property(self, prop):
        return tables._CAMEL_TO_SNAKE_CASE_TABLE.get(prop) or prop

    def translate_input_property(self, prop):
        return tables._SNAKE_TO_CAMEL_CASE_TABLE.get(prop) or prop

