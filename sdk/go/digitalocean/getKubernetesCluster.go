// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package digitalocean

import (
	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

// Retrieves information about a DigitalOcean Kubernetes cluster for use in other resources. This data source provides all of the cluster's properties as configured on your DigitalOcean account. This is useful if the cluster in question is not managed by the provider.
func LookupKubernetesCluster(ctx *pulumi.Context, args *LookupKubernetesClusterArgs, opts ...pulumi.InvokeOption) (*LookupKubernetesClusterResult, error) {
	var rv LookupKubernetesClusterResult
	err := ctx.Invoke("digitalocean:index/getKubernetesCluster:getKubernetesCluster", args, &rv, opts...)
	if err != nil {
		return nil, err
	}
	return &rv, nil
}

// A collection of arguments for invoking getKubernetesCluster.
type LookupKubernetesClusterArgs struct {
	// The name of Kubernetes cluster.
	Name string `pulumi:"name"`
	// A list of tag names applied to the node pool.
	Tags []string `pulumi:"tags"`
}

// A collection of values returned by getKubernetesCluster.
type LookupKubernetesClusterResult struct {
	// A boolean value indicating whether the cluster will be automatically upgraded to new patch releases during its maintenance window.
	// * `kube_config.0` - A representation of the Kubernetes cluster's kubeconfig with the following attributes:
	AutoUpgrade bool `pulumi:"autoUpgrade"`
	// The range of IP addresses in the overlay network of the Kubernetes cluster.
	ClusterSubnet string `pulumi:"clusterSubnet"`
	// The date and time when the node was created.
	CreatedAt string `pulumi:"createdAt"`
	// The base URL of the API server on the Kubernetes master node.
	Endpoint string `pulumi:"endpoint"`
	// The provider-assigned unique ID for this managed resource.
	Id string `pulumi:"id"`
	// The public IPv4 address of the Kubernetes master node.
	Ipv4Address string                           `pulumi:"ipv4Address"`
	KubeConfigs []GetKubernetesClusterKubeConfig `pulumi:"kubeConfigs"`
	// The auto-generated name for the node.
	Name string `pulumi:"name"`
	// A list of node pools associated with the cluster. Each node pool exports the following attributes:
	NodePools []GetKubernetesClusterNodePool `pulumi:"nodePools"`
	// The slug identifier for the region where the Kubernetes cluster is located.
	Region string `pulumi:"region"`
	// The range of assignable IP addresses for services running in the Kubernetes cluster.
	ServiceSubnet string `pulumi:"serviceSubnet"`
	// A string indicating the current status of the individual node.
	Status       string `pulumi:"status"`
	SurgeUpgrade bool   `pulumi:"surgeUpgrade"`
	// A list of tag names applied to the node pool.
	Tags []string `pulumi:"tags"`
	// The date and time when the node was last updated.
	UpdatedAt string `pulumi:"updatedAt"`
	// The slug identifier for the version of Kubernetes used for the cluster.
	Version string `pulumi:"version"`
	// The ID of the VPC where the Kubernetes cluster is located.
	VpcUuid string `pulumi:"vpcUuid"`
}
