import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';

export class TestingStack extends cdk.Stack {
    constructor(scope: Construct, id: string, props?: cdk.StackProps) {
        super(scope, id, props);

        // Define AWS resources here (currently empty for simplicity)
    }
}
