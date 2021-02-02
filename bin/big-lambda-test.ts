#!/usr/bin/env node
import "source-map-support/register";
import * as cdk from "@aws-cdk/core";
import { BigLambdaTestStack } from "../lib/big-lambda-test-stack";

const app = new cdk.App();
const stage: string = app.node.tryGetContext("stage");
new BigLambdaTestStack(app, `BigLambdaTestStack-${stage}`, { stage });
