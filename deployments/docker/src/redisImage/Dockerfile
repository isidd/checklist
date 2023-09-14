# Use the existing docker image as a base 

FROM alpine

# Download and install dependecies
RUN apk add --update redis 


# tell image what to do when it starts as a container
CMD ["redis-server"]