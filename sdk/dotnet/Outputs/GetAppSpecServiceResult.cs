// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.DigitalOcean.Outputs
{

    [OutputType]
    public sealed class GetAppSpecServiceResult
    {
        /// <summary>
        /// An optional build command to run while building this component from source.
        /// </summary>
        public readonly string? BuildCommand;
        /// <summary>
        /// The path to a Dockerfile relative to the root of the repo. If set, overrides usage of buildpacks.
        /// </summary>
        public readonly string? DockerfilePath;
        /// <summary>
        /// An environment slug describing the type of this app.
        /// </summary>
        public readonly string? EnvironmentSlug;
        /// <summary>
        /// Describes an environment variable made available to an app competent.
        /// </summary>
        public readonly ImmutableArray<Outputs.GetAppSpecServiceEnvResult> Envs;
        /// <summary>
        /// A Git repo to use as the component's source. The repository must be able to be cloned without authentication.  Only one of `git`, `github` or `gitlab`  may be set.
        /// </summary>
        public readonly Outputs.GetAppSpecServiceGitResult? Git;
        /// <summary>
        /// A GitHub repo to use as the component's source. DigitalOcean App Platform must have [access to the repository](https://cloud.digitalocean.com/apps/github/install). Only one of `git`, `github`, `gitlab`, or `image` may be set.
        /// </summary>
        public readonly Outputs.GetAppSpecServiceGithubResult? Github;
        /// <summary>
        /// A Gitlab repo to use as the component's source. DigitalOcean App Platform must have [access to the repository](https://cloud.digitalocean.com/apps/gitlab/install). Only one of `git`, `github`, `gitlab`, or `image` may be set.
        /// </summary>
        public readonly Outputs.GetAppSpecServiceGitlabResult? Gitlab;
        /// <summary>
        /// A health check to determine the availability of this component.
        /// </summary>
        public readonly Outputs.GetAppSpecServiceHealthCheckResult? HealthCheck;
        /// <summary>
        /// The internal port on which this service's run command will listen.
        /// </summary>
        public readonly int HttpPort;
        /// <summary>
        /// An image to use as the component's source. Only one of `git`, `github`, `gitlab`, or `image` may be set.
        /// </summary>
        public readonly Outputs.GetAppSpecServiceImageResult? Image;
        /// <summary>
        /// The amount of instances that this component should be scaled to.
        /// </summary>
        public readonly int? InstanceCount;
        /// <summary>
        /// The instance size to use for this component.
        /// </summary>
        public readonly string? InstanceSizeSlug;
        /// <summary>
        /// A list of ports on which this service will listen for internal traffic.
        /// </summary>
        public readonly ImmutableArray<int> InternalPorts;
        /// <summary>
        /// The name of the component.
        /// </summary>
        public readonly string Name;
        public readonly ImmutableArray<Outputs.GetAppSpecServiceRouteResult> Routes;
        /// <summary>
        /// An optional run command to override the component's default.
        /// </summary>
        public readonly string RunCommand;
        /// <summary>
        /// An optional path to the working directory to use for the build.
        /// </summary>
        public readonly string? SourceDir;

        [OutputConstructor]
        private GetAppSpecServiceResult(
            string? buildCommand,

            string? dockerfilePath,

            string? environmentSlug,

            ImmutableArray<Outputs.GetAppSpecServiceEnvResult> envs,

            Outputs.GetAppSpecServiceGitResult? git,

            Outputs.GetAppSpecServiceGithubResult? github,

            Outputs.GetAppSpecServiceGitlabResult? gitlab,

            Outputs.GetAppSpecServiceHealthCheckResult? healthCheck,

            int httpPort,

            Outputs.GetAppSpecServiceImageResult? image,

            int? instanceCount,

            string? instanceSizeSlug,

            ImmutableArray<int> internalPorts,

            string name,

            ImmutableArray<Outputs.GetAppSpecServiceRouteResult> routes,

            string runCommand,

            string? sourceDir)
        {
            BuildCommand = buildCommand;
            DockerfilePath = dockerfilePath;
            EnvironmentSlug = environmentSlug;
            Envs = envs;
            Git = git;
            Github = github;
            Gitlab = gitlab;
            HealthCheck = healthCheck;
            HttpPort = httpPort;
            Image = image;
            InstanceCount = instanceCount;
            InstanceSizeSlug = instanceSizeSlug;
            InternalPorts = internalPorts;
            Name = name;
            Routes = routes;
            RunCommand = runCommand;
            SourceDir = sourceDir;
        }
    }
}
