FROM public.ecr.aws/lambda/python:3.8
# Alternatively, you can pull the base image from Docker Hub: amazon/aws-lambda-nodejs:12

COPY . ${LAMBDA_TASK_ROOT}


# Set the CMD to your handler (could also be done as a parameter override outside of the Dockerfile)
CMD [ "index.handler" ]  
