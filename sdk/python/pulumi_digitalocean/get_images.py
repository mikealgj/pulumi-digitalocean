# coding=utf-8
# *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import warnings
import pulumi
import pulumi.runtime
from typing import Any, Mapping, Optional, Sequence, Union
from . import _utilities, _tables
from . import outputs
from ._inputs import *

__all__ = [
    'GetImagesResult',
    'AwaitableGetImagesResult',
    'get_images',
]

@pulumi.output_type
class GetImagesResult:
    """
    A collection of values returned by getImages.
    """
    def __init__(__self__, filters=None, id=None, images=None, sorts=None):
        if filters and not isinstance(filters, list):
            raise TypeError("Expected argument 'filters' to be a list")
        pulumi.set(__self__, "filters", filters)
        if id and not isinstance(id, str):
            raise TypeError("Expected argument 'id' to be a str")
        pulumi.set(__self__, "id", id)
        if images and not isinstance(images, list):
            raise TypeError("Expected argument 'images' to be a list")
        pulumi.set(__self__, "images", images)
        if sorts and not isinstance(sorts, list):
            raise TypeError("Expected argument 'sorts' to be a list")
        pulumi.set(__self__, "sorts", sorts)

    @property
    @pulumi.getter
    def filters(self) -> Optional[Sequence['outputs.GetImagesFilterResult']]:
        return pulumi.get(self, "filters")

    @property
    @pulumi.getter
    def id(self) -> str:
        """
        The provider-assigned unique ID for this managed resource.
        """
        return pulumi.get(self, "id")

    @property
    @pulumi.getter
    def images(self) -> Sequence['outputs.GetImagesImageResult']:
        """
        A set of images satisfying any `filter` and `sort` criteria. Each image has the following attributes:  
        - `slug`: Unique text identifier of the image.
        - `id`: The ID of the image.
        - `name`: The name of the image.
        - `type`: Type of the image.
        """
        return pulumi.get(self, "images")

    @property
    @pulumi.getter
    def sorts(self) -> Optional[Sequence['outputs.GetImagesSortResult']]:
        return pulumi.get(self, "sorts")


class AwaitableGetImagesResult(GetImagesResult):
    # pylint: disable=using-constant-test
    def __await__(self):
        if False:
            yield self
        return GetImagesResult(
            filters=self.filters,
            id=self.id,
            images=self.images,
            sorts=self.sorts)


def get_images(filters: Optional[Sequence[pulumi.InputType['GetImagesFilterArgs']]] = None,
               sorts: Optional[Sequence[pulumi.InputType['GetImagesSortArgs']]] = None,
               opts: Optional[pulumi.InvokeOptions] = None) -> AwaitableGetImagesResult:
    """
    Use this data source to access information about an existing resource.

    :param Sequence[pulumi.InputType['GetImagesFilterArgs']] filters: Filter the results.
           The `filter` block is documented below.
    :param Sequence[pulumi.InputType['GetImagesSortArgs']] sorts: Sort the results.
           The `sort` block is documented below.
    """
    __args__ = dict()
    __args__['filters'] = filters
    __args__['sorts'] = sorts
    if opts is None:
        opts = pulumi.InvokeOptions()
    if opts.version is None:
        opts.version = _utilities.get_version()
    __ret__ = pulumi.runtime.invoke('digitalocean:index/getImages:getImages', __args__, opts=opts, typ=GetImagesResult).value

    return AwaitableGetImagesResult(
        filters=__ret__.filters,
        id=__ret__.id,
        images=__ret__.images,
        sorts=__ret__.sorts)
