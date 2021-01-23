# lambda-template

The bare minimal nodejs.12x application running on [Amazon Lambda](http://aws.amazon.com/lambda/).

## Install

Clone this repository.

```
cd /to/your/template/path
npm install
```

## Usage

When running in AWS, I suggest you to use my [lambda-middy-layer](https://github.com/billynorris/lambda-middy-layer). This helper package makes core lambda functionality easier to write by handling some logic you shouldn't have to worry about (correlation ids, log obfuscation, exception handling, etc.)

Example:

```
  MiddyLambdaLayer:
    Type: AWS::Serverless::LayerVersion
    Properties:
      ContentUri:
        Bucket: !Ref ArtifactBucketName
        Key: !FindInMap [ParameterMaps, 'Lambdas', 'MiddyLambdaLayer']
      CompatibleRuntimes:
        - nodejs10.x
        - nodejs12.x

  GenericFunction:
    Type: AWS::Serverless::Function
    Properties:
      CodeUri:
        Key: !FindInMap [ParameterMaps, 'Lambdas', 'GenericFunction']
      Events:
        MyApiResourceV1:
          Type: Api
          Properties:
            RestApiId: !Ref RestApi
            Path: /v1/my/api/resource
            Method: get
      Layers:
        - !Ref MiddyLambdaLayer
```
