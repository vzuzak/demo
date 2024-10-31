#!/usr/bin/env node
import {App, AppProps, Environment} from "aws-cdk-lib";
import { TestingStack } from '../stacks/testing-stack';

export class TestApplication extends App {
    constructor(propsRaw?: AppProps) {
        super(propsRaw);
        const testingStack = new TestingStack(this, "TestingStack");
    }
}


new TestApplication();

