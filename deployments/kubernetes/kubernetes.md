Links : https://www.udemy.com/course/microservices-with-node-js-and-react/learn/lecture/19099474#overview/

Overview : 

        - What ? 
                . Kubernetes is a tool for running bunch of different Containers together
                . We will give some configuration files to describe how we want our containers to run and interact with each other
                . It basically runs some different programs and make communication between those progs very easy and string forward


**_<!- Kubernetes Cluster ->_**

                                                Kubernetes Cluster
                            |-------------------------------------------------------|      (here Pods and Containers are same)
                            |    |---Node-----|   |---Node-----|  |---Node-----|  --|--|
                            |    | |-Cont.--| |   | |-Cont.--| |  | |-Cont.--| |    |  |
                            |    | |--------| |   | |--------| |  | |--------| |    |  |
                            |    | |service | |   | |service | |  | |  event | |    |  |-> Virtual Machine
                            |    | |   1    | |   | |   1    | |  | |   bus  | |    |  |
                            |    | |--------| |   | |--------| |  | |--------| |    |  |
                            |    |------------|   |-----------|  |-------------|  --|--|
                            | |---------------------------------------------------| |
                            | |             Common Communication Channel          | |
                            | |                       (Service)                   | |
                            | |---------------------------------------------------| |
                            |                                                       |
                            |    |---------------------------------------------|    |
        |--ConfigFile---|---|--->|                   Master                    |    |
        |---------------|   |    |---------------------------------------------|    |
        |  Run 2 copies |   |      |                                         |      |
        |  of service-1 |   |------|-----------------------------------------|------|
        |---------------|          |--------------------↓--------------------|
        |  allow copies |                   Programme to manage everything
        |     to be     |                           in cluster   
        |   accessible  |                                             (Master)                                                 
        |  from Network |
        |---------------|
                    
            Cluster - It is a set of different machines (it can have only one or 100s of virtual machine)
            Nodes   - All these single virtual machine referred to as a Nodes
            Master  - Programme to manage everything inside cluster

        * If we were not using Kubernetes 
                > We would have to somehow teach the event bus how to directly reach out over to this second virtual machine and more 
                  specifically, the service 1 running on it. And we'd have to figure out how to do the same thing to have it reach out to this first virtual machine and the service running on there as well.
            
                > There has to be a common communication channel where we simply asy make request to the service-1 and it will take care of
                  everything

                > Using Kubernetes the communication between microservice becomes very easy

                > It will [Create Services] + [Launching new Copies] + [Scaling No. of copies] + [Handling communication]



**_<!- Kubernetes execution flow ->_**

                    |--ConfigFile---|
                    |---------------|
                    |  Run 2 copies |
                    |  of service-1 |
                    |---------------|
                    |  allow copies |
                    |     to be     |
                    |   accessible  |
                    |  from Network |
                    |---------------|


                . To create a Container from an image we need a configuration configFile, here we will tell Kubernetes how to manage our 
                  Pods/Containers and Communication.
                . Now we need to pass this file to Kubernetes using Kubectl(command line tool)
                . Kubernetes cluster is going to read this file
                . Now it will try to find out the copy of Service Image. First it will look into the computer only(docker damon) an dif it 
                  is not available it is going to get it from the Docker Hub
                . Once it finds the Image it is going to create a 2 Container
                . Each Container that is created is going to be hosted or created something called Pods
                . Kubernetes is also going to create deployment
                . Deployment is going to read from the configFile and maintain/managing the copies 
                . If something goes wrong with the Pods/Containers (if it crashes) then deployment will make sure to that Pods automatically 
                  gets recreated 
                . Deployments makes sure that we have right number of Pods and is running 
                . We also has Service 