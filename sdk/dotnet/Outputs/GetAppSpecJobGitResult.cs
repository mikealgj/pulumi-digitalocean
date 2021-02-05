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
    public sealed class GetAppSpecJobGitResult
    {
        /// <summary>
        /// The name of the branch to use.
        /// </summary>
        public readonly string? Branch;
        /// <summary>
        /// The clone URL of the repo.
        /// </summary>
        public readonly string? RepoCloneUrl;

        [OutputConstructor]
        private GetAppSpecJobGitResult(
            string? branch,

            string? repoCloneUrl)
        {
            Branch = branch;
            RepoCloneUrl = repoCloneUrl;
        }
    }
}
