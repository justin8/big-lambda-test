import * as cdk from "@aws-cdk/core";
import * as lambda from "@aws-cdk/aws-lambda";

export interface BigLambdaTestStackProps extends cdk.StackProps {
  stage: string;
}

export class BigLambdaTestStack extends cdk.Stack {
  constructor(
    scope: cdk.Construct,
    id: string,
    props: BigLambdaTestStackProps
  ) {
    super(scope, id, props);

    const func = new lambda.DockerImageFunction(this, "container-test", {
      code: lambda.DockerImageCode.fromImageAsset("container"),
      environment: { stage: props.stage },
    });
  }
}
