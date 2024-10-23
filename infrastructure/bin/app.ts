#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';
import { TestingStack } from '../lib/testing-stack';

const app = new cdk.App();
new TestingStack(app, 'TestingStack');
