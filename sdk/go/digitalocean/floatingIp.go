// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

// nolint: lll
package digitalocean

import (
	"reflect"

	"github.com/pkg/errors"
	"github.com/pulumi/pulumi/sdk/go/pulumi"
)

// Provides a DigitalOcean Floating IP to represent a publicly-accessible static IP addresses that can be mapped to one of your Droplets.
//
// > **NOTE:** Floating IPs can be assigned to a Droplet either directly on the `.FloatingIp` resource by setting a `dropletId` or using the `.FloatingIpAssignment` resource, but the two cannot be used together.
//
// > This content is derived from https://github.com/terraform-providers/terraform-provider-digitalocean/blob/master/website/docs/r/floating_ip.html.markdown.
type FloatingIp struct {
	pulumi.CustomResourceState

	// The ID of Droplet that the Floating IP will be assigned to.
	DropletId pulumi.IntPtrOutput `pulumi:"dropletId"`
	// The IP Address of the resource
	IpAddress pulumi.StringOutput `pulumi:"ipAddress"`
	// The region that the Floating IP is reserved to.
	Region pulumi.StringOutput `pulumi:"region"`
	// The uniform resource name of the floating ip
	Urn pulumi.StringOutput `pulumi:"urn"`
}

// NewFloatingIp registers a new resource with the given unique name, arguments, and options.
func NewFloatingIp(ctx *pulumi.Context,
	name string, args *FloatingIpArgs, opts ...pulumi.ResourceOption) (*FloatingIp, error) {
	if args == nil || args.Region == nil {
		return nil, errors.New("missing required argument 'Region'")
	}
	if args == nil {
		args = &FloatingIpArgs{}
	}
	var resource FloatingIp
	err := ctx.RegisterResource("digitalocean:index/floatingIp:FloatingIp", name, args, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// GetFloatingIp gets an existing FloatingIp resource's state with the given name, ID, and optional
// state properties that are used to uniquely qualify the lookup (nil if not required).
func GetFloatingIp(ctx *pulumi.Context,
	name string, id pulumi.IDInput, state *FloatingIpState, opts ...pulumi.ResourceOption) (*FloatingIp, error) {
	var resource FloatingIp
	err := ctx.ReadResource("digitalocean:index/floatingIp:FloatingIp", name, id, state, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// Input properties used for looking up and filtering FloatingIp resources.
type floatingIpState struct {
	// The ID of Droplet that the Floating IP will be assigned to.
	DropletId *int `pulumi:"dropletId"`
	// The IP Address of the resource
	IpAddress *string `pulumi:"ipAddress"`
	// The region that the Floating IP is reserved to.
	Region *string `pulumi:"region"`
	// The uniform resource name of the floating ip
	Urn *string `pulumi:"urn"`
}

type FloatingIpState struct {
	// The ID of Droplet that the Floating IP will be assigned to.
	DropletId pulumi.IntPtrInput
	// The IP Address of the resource
	IpAddress pulumi.StringPtrInput
	// The region that the Floating IP is reserved to.
	Region pulumi.StringPtrInput
	// The uniform resource name of the floating ip
	Urn pulumi.StringPtrInput
}

func (FloatingIpState) ElementType() reflect.Type {
	return reflect.TypeOf((*floatingIpState)(nil)).Elem()
}

type floatingIpArgs struct {
	// The ID of Droplet that the Floating IP will be assigned to.
	DropletId *int `pulumi:"dropletId"`
	// The IP Address of the resource
	IpAddress *string `pulumi:"ipAddress"`
	// The region that the Floating IP is reserved to.
	Region string `pulumi:"region"`
}

// The set of arguments for constructing a FloatingIp resource.
type FloatingIpArgs struct {
	// The ID of Droplet that the Floating IP will be assigned to.
	DropletId pulumi.IntPtrInput
	// The IP Address of the resource
	IpAddress pulumi.StringPtrInput
	// The region that the Floating IP is reserved to.
	Region pulumi.StringInput
}

func (FloatingIpArgs) ElementType() reflect.Type {
	return reflect.TypeOf((*floatingIpArgs)(nil)).Elem()
}

