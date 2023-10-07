Link : https://www.udemy.com/course/microservices-with-node-js-and-react/learn/lecture/19223580#overview

Overview :
With Docker we are going to create a series of things called Container 
Container is a isolated computing environment. It contains everything it require to run one single program

                                          Running Application
                                                    ↓
                                    assumption about the environment 
                                                    + 
                                    precise knowledge how to start it (npm)

                                (Docker solves both by containerizing it with a primary process)

                                
**_<!- General Flow of installing a Software ->_**

                       Installing Software

                ↓   |----------------------|
                ↓   |  Download Installer  |
                ↓   |----------------------| ↓
                ↓   |----------------------|
                ↓   |     Run Installer    |
                ↓   |----------------------| ↓
                ↓   |----------------------|
                ↓   |     Get error msg    |
                ↓   |----------------------| ↓
                ↓   |----------------------|
                ↓   |     Trouble shoot    |↤↤↤
                ↓   |----------------------|     ↑
                ↓   |----------------------|     ↑
                ↓   |   Re-run installer   |     ↑ (Cycle Continues)
                ↓   |----------------------|     ↑
                ↓   |----------------------|     ↑
                ↓   |     another issue    |↦↦↦
                ↓   |----------------------|


            - This is what docker is trying to fix
                . Docker wants to make it really easy and very straight forward for us to install and run the
                  software on any given computer
                . Not just in PC but any web servers or any cloud based computing platform

            - Why ?
                . Docker makes it very easy to install and run software without worrying about setup and dependencies

            - What ?
                . Docker is a eco-system around creating and running containers
                                           Eco-System
                        |-------------------------------------------|
                        |    |---------------|  |---------------|   |
                        |    |    Docker     |  |    Docker     |   |
                        |    |    Client     |  |    Client     |   |
                        |    |---------------|  |---------------|   |
                        |    |---------------|  |---------------|   |
                        |    |    Docker     |  |    Docker     |   |
                        |    |    Machine    |  |    Machine    |   |
                        |    |---------------|  |---------------|   |
                        |    |---------------|  |---------------|   |
                        |    |    Docker     |  |    Docker     |   |
                        |    |      Hub      |  |      Hub      |   |
                        |    |---------------|  |---------------|   |
                        |-------------------------------------------|
                                               ↓
            These are all tools or pieces of software that come together that come together to creating
            a platform or eco system around creating and running Containers

          - Container ?
                . Its a program of it's own isolated set of hardware resources
                    - own little space of memory
                    - own little space of networking
                    - own little space of hard drive

                                                |------------------|
                                           |--->|    Container     |
                                           |    |------------------|
            |-------------|                |    |------------------|
            |    Image    |----------------|--->|    Container     |
            |-------------|                |    |------------------|
    Single File with all the deps and      |    |------------------|
          config require to run a          |--->|    Container     |
                 Prog.                     |    |------------------|
                                                (Instance Of Images)

**_<!- Docker Client ->_**

                ```sh
                docker run hello-world
                ```
                                            Our Computer                Docker Hub
        |------------------------|    |---------------------|      |---------------------|
        | docker run hello-world | -> |  |---------------|  |      |  |---------------|  |
        |------------------------|    |  | Docker Client |  |      |  |  hello-world  |  |
                                      |  |---------------|  |      |  |---------------|  |
                                      |                     |      |                     |
                                      |  |---------------|  |      |  |---------------|  |
                                      |  | Docker Server |  |      |  |      redis    |  |
                                      |  |---------------|  |      |  |---------------|  |
                                      |                     |      |                     |
                                      |  |--Image cache--|  |      |  |---------------|  |
                                      |  |               |  |      |  |     busybox   |  |
                                      |  |               |  |      |  |---------------|  |
                                      |  | --------------|  |      |          .       |  |
                                      |---------------------|      |------------------|  |

                    . We execute a command docker run hello-world
                    . It will start the Docker Client or the docker cli (docker cli is in charge of taking commands from us)
                    do a processing on them and communicating the command to the Docker Server
                    . Docker server is the in charge of the heavy lifting
                    . When we run a command Docker run hello-world -> this means we want to start a new container using the image
                    hello-world
                    . hello-world image has a prog.
                    . when we run command it was issued over to the docker server
                            Series of action will occurs in the background
                    . Docker server saw that we are trying to start a new image (hello-world)
                    . First thing it will do is to check if it already have a local copy @ local
                    . Docker server will look into the <image cache> (initially it will be empty since not pulled the image before)
                    . Now Docker Server will try to reach out to the Service called Docker Hub (It is a repo of images that we can download and run on our machine)
                    . If Docker hub has the Image -> thenDocker server will download the image and store it on <image cache>
                    . After this it will create a instance of a Container and run the prog.
                    . So if we again run the command -> docker run hello-world this time it is not going to download that image and will be served from the image cache

**_<!- Operating System and relation with container ->_**

                                           (Processes Running on Computer)
                    |------------------------------------------------------------------------|
                    |    |------------|   |--------------|   |------------|  |------------|  |
                    |    |   Chrome   |   |   Terminal   |   |   NodeJs   |  |    Teams   |  |
                    |    |------------|   |--------------|   |------------|  |------------|  |
                    |------------------------------------------------------------------------|
                                  |                     |                     |
                                  ↓                     ↓                     ↓
                            |------------|        |------------|        |------------| (Running Prog. issues request to Kernel
                            | Sys. Calls |        | Sys. Calls |        | Sys. Calls | to interact with the piece of Hardware)
                            |------------|        |------------|        |------------|
                                  |                     |                     |
                                  ↓                     ↓                     ↓
                        |-----------------------------------------------------------------|
                        |                             Kernel                              |
                        |-----------------------------------------------------------------|
                                 |                     |                        |
                                 ↓                     ↓                        ↓
                          |------------|         |------------|           |------------|
                          |     CPU    |         |   Memory   |           |  Hard Disk |
                          |------------|         |------------|           |------------|


        . If we are writing a file to the Hard Drive It is not the NodeJs that is communicating directly to the physical device
          instead NodeJs says to the Kernel to write a file on the Hard Drive
        . The running prog.(chrome/NodeJs) interact with the Kernel using System calls these are usually like function invocations
          Kernel exposes different endpoints to say if you want to write on the hard drive call this function

**_<!- Case ->_**

                                    |---------------------------------------|
                                    |    |-python v2--|   |-python v3--|    |
                                    |    |   Chrome   |   |    NodeJs  |    |
                                    |    |------------|   |------------|    |
                                    |---------------------------------------|
                                                        |
                                                        ↓
                                                 |------------|
                                                 | Sys. Calls |
                                                 |------------|
                                                       |
                                                       ↓
                        |-----------------------------------------------------------------|
                        |       Kernel (which process is making the system call)          |
                        |-----------------------------------------------------------------|
                                                       |
                                                       ↓
                                                 |------------|
                                                 |  Hard Disk |    |---------------------------------------|
                                                 |  python-v2 | ==>| |------------|        |------------|  |
                                                 |------------|    | | python v2  |        | python v3  |  |
                                                                   | |------------|        |------------|  |
                                                                   |---------------------------------------|
                                                                    <Segment of HD          <Segment of HD
                                                                         for Chrome>              for Node>

          .  Suppose we have 2 programmes (chrome & nodeJs) running on the system.
          .  Now suppose the chrome uses python-v2 & nodeJs uses python-v3
          .  however on hard disk we only have option to run python-v2 and we have no 2 identical installations of python at the same
             time
          .  So now the Chrome would work properly but nodeJs will not as node requires python-v3

        How do we solve this issue ?
          .  One way to do it by using one of the OS feature called name spacing
                     with name spacing we can look at all of the hardware resources connected to our computer and we can simply
                     segment out portions of those resources
                     We can create segments of the hard disk specifically dedicated for the python-v2 and other for python-v3
          .  So the Kernel check => if the Chrome is accessing the HD it will forward that call to python-v2 HD segment and if
             nodeJs tries to access file from HD then Kernel forwards that call to python-v3 HD segment.
          .  This process of Segmenting of Hardware resource based on a process that is asking for it is called <Name spacing>
             with name spacing we are allowed to isolate resources/process or a group of processes.
             So any time a process ask for resource we will direct them to a specific area of the given piece of hardware (Name spacing is not restricted to hardware we can also apply this to Software as well)


                                        |----------------------------------------------------------------|
                                        |    |---------------|  |---------------|  |---------------|     |
                                        |    |    Docker     |  |    Docker     |  |    Docker     |     |
        |--------------|                |    |    Client     |  |    Client     |  |    Client     |     |
        | Name Spacing | -------------->|    |---------------|  |---------------|  |---------------|     |
        |--------------|                |    |---------------|  |---------------|  |---------------|     |
      <Isolating resources              |    |    Docker     |  |    Docker     |  |    Docker     |     |
        per process or                  |    |    Machine    |  |    Machine    |  |    Machine    |     |
       group of process>                |    |---------------|  |---------------|  |---------------|     |
                                        |----------------------------------------------------------------|


                                        |----------------------------------------------------------------|
                                        |    |---------------|  |---------------|  |---------------|     |
        |----------------|              |    |    Memory     |  |    CPU Usage  |  | Hard drive-I/O|     |
        | Control Groups | ------------>|    |---------------|  |---------------|  |---------------|     |
        |----------------|              |    |---------------|                                           |
      <Limited amount of                |    |  Network(B/W) |                                           |
        resource used per process>      |    |---------------|                                           |
                                        |----------------------------------------------------------------|


             .  Control Groups(cGroups) can be used to limit the amount of Resources that particular process can use
             .  This area of Hard Drive is for this process
             .  A control group can be used to limit the -
                    > amount of memory that a process can use
                    > the amount of CPU usage
                    > the amount of hard drive, input input or input output
                    > the amount of network bandwidth as well

        So these 2 features =>
                    <NameSpacing> + <Control Groups> |-> can be used to isolate a single process and limit the amount of resources
                                                         it can talk to and amount of bandwidth it can make use of.
            <!-- *** The <NameSpacing> and <Control Group> features are specific to Linux Operating system only *** -->
              > So if we install Docker for window or Docker for Mac
                    ->  it installed a Linux virtual machine
                    ->  inside of this Virtual Machine all the Containers are being created
                    ->  So inside of Virtual machine we have Linux Kernel which will be hosting and running processes inside of container
                    ->  Its this Linux Kernel that is going to limit the access or isolating access on hardware resources

                        ```sh
                            docker version
                        ```
                    -> this will show OS/Arch: linux/amd64


                    |------------Container--------------|
                    |                                   |
                    |                |------------------|---------------------|
                    |                |    |-python v2--||   |-python v3--|    |
                    |                |    |   Chrome   ||   |    NodeJs  |    |
                    |                |    |------------||   |------------|    |
                    |                |------------------|---------------------|
                    |                                   |
                    |                                   ↓
                    |                             |-----|-------|
                    |                             | Sys.| Calls |
                    |                             |-----|-------|
                    |                                   |
                    |                                   ↓
                    |    |------------------------------|-----------------------------------|
                    |    |       Kernel (which process i|s making the system call)          |
                    |    |------------------------------|-----------------------------------|
                    |                                   |
                    |                                   ↓
                    |            |------------Hard Disc-|-----------------|
                    |            | |------------|       | |------------|  |
                    |            | | python v2  |       | | python v3  |  |
                    |            | |------------|       | |------------|  |
                    |            |----------------------|-----------------|
                    |-----------------------------------|

**_<!- Container ->_**

    It is not a physical construct instead it is a process or group of processes that have grouping of resources
    specifically assigned to it.

                                            |------------Container----------|
                                            |     |----------------------|  |
                                            |     |         nodeJs       |  |
                                            |     |----------------------|  |
                                            |                  ↓            |
                                            |            |--------------------------|
                                            |            |          Kernel          |
                                            |            |--------------------------|
                                            |                  ↓            |
                                            | |------------| |------------| |
                                            | | Hard Drive | |  Network   | |    <Portion of Each
                                            | |------------| |------------| | ↦  made available
                                            | |------------| |------------| |     to processes>
                                            | |     RAM    | |    CPU     | |
                                            | |------------| |------------| |
                                            |-------------------------------|

                    > We have some running process(nodeJs) that sends a system call to <Kernel> and <Kernel> is going to look at it
                      and direct it to a very specific portion of the <hard drive> <RAM> <CPU> etc.. and the portion of each is made available for this process

**_<!- Image ->_**

                                    |-------------Image---------------|
                                    |_________________________________|
                                    |   Fs-Snapshot | Startup Command |
                                    |---------------|-----------------|
                                    | |-----------| |                 |
                                    | |  Chrome   | |                 |
                                    | |-----------| | > run chrome    |
                                    | |-----------| | > run nodejs    |
                                    | |  nodeJS   | |                 |
                                    | |-----------| |                 |
                                    |---------------------------------|


            >  Image is basically a kind of snapshot of the file system along with the specific startup command

**_<!- Docker cli in details ->_**

                * Creating and Running a Container from an Image

                    ```sh
                            docker run < image name >
                    ```

                       |---------------|-----------------|-------------------------|
                       |     docker    |        run      |     < image name >      |
                       |        ↑      |         ↑       |        ↑                |
                       |---------------|-----------------|-------------------------|
                       | reference to  |  try create &   | Name of the image       |
                       | Docker client |  run container  | to use for the container|
                       |---------------|-----------------|-------------------------|

                                                |------------Container----------|
    |-------------Image---------------|         |     |----------------------|  |
    |_________________________________|         |     |      hello-world     |  |
    |  Fs-Snapshot  | Startup Command |         |     |----------------------|  |
    |---------------|-----------------|         |                  ↓            |
    | |-----------| |                 |         |            |--------------------------|
    | |hello-world| |> run hello-world|         |            |          Kernel          |
    | |-----------| |                 |         |            |--------------------------|
    |---------------------------------|         |                  ↓            |
                                                | |------------| |------------| |
                                                | | hello-world| |  Network   | |    (Portion of Each
                                                | |------------| |------------| | ↦  made available
                                                | |------------| |------------| |     to processes)
                                                | |     RAM    | |    CPU     | |
                                                | |------------| |------------| |
                                                |-------------------------------|

**_<!- Docker cli in details ->_**

               docker run busybox < echo hi there >

                       |---------------|-----------------|-------------------------|-------------------------|
                       |     docker    |        run      |     < image name >      |       < command >       |
                       |        ↑      |         ↑       |           ↑             |            ↑            |
                       |---------------|-----------------|-------------------------|-------------------------|
                       | reference to  |  try create &   | Name of the image       |     default command     |
                       | Docker client |  run container  | to use for the container|         override        |
                       |---------------|-----------------|-------------------------|-------------------------|

                > docker run busybox echo hello there
                > docker run busybox ls

        - here echo, ls command will run because ls and echo are the programs that exist inside of the busybox file system(Hard drive)
          image > somewhere inside the folder structure there is a ls/echo executable

**_<!- Listing running Containers ->_**

        . docker ps => this specifically shows running Containers

                                    |---------------|-----------------|
                                    |     docker    |        ps       |
                                    |        ↑      |         ↑       |
                                    |---------------|-----------------|
                                    | reference to  | list all running|
                                    | Docker client |     container   |
                                    |---------------|-----------------|

               - docker run busybox ping google.com
               - docker ps

        CONTAINER ID   |    IMAGE   |   COMMAND   |   CREATED   |   STATUS   |   PORT   |   NAMES
    -------------------|------------|-------------|-------------|------------|----------|-----------------------------------------
          abcd743ry    |    busybox |      ping   |  30 sec ago |  up 29 sec |          | epic_damn(randomly generated name)
                                       google.com


        . show all Containers that ever been created on machine

        ```sh
                docker ps --all
        ```

**_<!- Container Lifecycle ->_**

                ```sh
                        docker run => < docker create > + < docker start >
                ```

            ```sh
            docker create busybox
                    => return => abcdefgh87y43r9834y5abcdefghabcdefgh87y43r9834y5abcdefgh
                                < this is the Id of the container that was just created >
            docker start -a abcdefgh87y43r9834y5abcdefghabcdefgh87y43r9834y5abcdefgh

            ```
                -a -> flag makes the docker to watch form the Container and print it out to terminal
                      (kind of attach the container and watch the output coming from t and print it out on the terminal)
                - if we start a container after existed. It is going to run the same command we had run during the the time we have
                  run the container(no overriding commands)

            - ***<Delete all the Listed Container>***

                    ```sh
                        docker system prune
                    ```
                . Delete all
                    - stopped containers
                    - networks not in use
                    - dangle images
                    - build cache

            - ***<Container logs>***

                    ```sh
                    docker logs < container id >
                    ```

            - ***< Container stop or kill >***

                    ```sh
                        docker stop < container id >
                        docker kill <container id >
                    ```
                . in case of docker stop => it send a < SIGTERM >(terminate signal) message it will be receive by the process.
                  and giving it a time do do a cleanup(save some file/ emit a message), we can listen to this signals

                . in case of docker kill => it send a < SIGKILL >(kill signal) message to primary running process inside the container
                  and tells you have to should down right now. you do not get to do any additional work

                . If after issuing the docker stop command and Container has not stopped running it will automatically fallback to
                  docker kill command after 10sec

**_<!- Executing Commands For Running Containers ->_**

                . Execute an additional command in running container

                ```sh
                    docker   exec    -it    < container id >    < command >
                              ↓       ↓                              ↓
                    (run another  (allow us to provide         (Command to execute)
                        command)    input to container)


                    docker exec -it abc35474bbd redis-cli

                ```

**_<!- -it flag ->_**

    When we run docker in our computer every process running inside a virtual machine running Linux

        - So we have 3 different running processes. All inside a Linux environment

    |-----------------------------------|  |-----------------------------------|  |-----------------------------------|
    |         ping google.com           |  |          echo hi there            |  |           redis-cli               |
    |-----------|------------|----------|  |-----------|------------|----------|  |-----------|------------|----------|
    |   STDIN   |   STDOUT   |  STDERR  |  |   STDIN   |   STDOUT   |  STDERR  |  |   STDIN   |   STDOUT   |  STDERR  |
    |-----------------------------------|  |-----------------------------------|  |-----------------------------------|

        - Every process we create in Linux env. has 3 communication channel attached to it
            . STDIN  - Communicate into the process (commands we type on terminal)
            . STDOUT - Communicate out of the process (logs we see on terminal)
            . STDERR - Communicate the information out of the process which is error in nature
        These channels are used to communicated either into the process or out of the process

    . -it flag is actually -i -t separate flags
        -i -> we want to attach our terminal to the STDIN channel of the running process (anything we type gets directed to STDIN cli)
        -t -> is basically to show the nice formatted output

**_<!- Getting Shell/Terminal access of the Container ->_**

            - The most common thing which we want to do is the shell/terminal access of our running container
              we want to run command inside of container without having to run docker exact each time

            ```sh
                docker exec -it sh
            ```
            this will give access to the shell of the Linux environment
                (full terminal access of the running Container)

            sh -> sh is a name of the program that has been executed inside of the container
                  Its a command processor or a shell that allow us to type command in and have them to be executed inside of the Container


                       |-------------|-----------------|--------------|--------------|
                       |     bash    |    powershell   |     zsh      |     sh       |
                       |-------------|-----------------|--------------|--------------|
                                             Command Processors

        - in most of the cases we run

                    ```sh
                            docker run -it busybox sh
                    ```

**_<!- Creating Docker Images ->_**

        |------------|        |---------------|        |---------------|       |---------------|
        | Dockerfile |   =>   | Docker Client |   =>   | Docker Server |  =>   |  Usable Image |
        |------------|        |---------------|        |---------------|       |---------------|
       Configuration to
       define how Container
       should behave
                                            Creating a Dockerfile
                                                      ↓
                                            |--------------------|
                                            | Specify base Image |
                                            |--------------------|
                                                      ↓
                                           |----------------------|
                                           | run some commands to |
                                           | install other prog.  |
                                           |----------------------|
                                                      ↓
                                          |------------------------|
                                          | Specify a command to   |
                                          | run @ Container startup|
                                          |------------------------|

**_<!- Creating Docker file ->_**

            . Create an Image that runs redis-server

                        # Use the existing docker image as a base

                        FROM alpine

                        # Download and install dependencies
                        RUN apk add --update redis


                        # tell image what to do when it starts as a container
                        CMD ["redis-server"]

                ```sh
                        docker build .   => this will create a Docker file & . is a build context
                ```
            > Writing a Dockerfile => Being given a Computer with no OS and being told to install Chrome

                        |--------------------------------------------|
                        |       Install an Operating system          |  ==> Specify a base image
                        |--------------------------------------------|
                                              ↓
                        |--------------------------------------------|
                        |       Startup the default browser          | ---------|
                        |--------------------------------------------|          |
                                              ↓                                 |
                        |--------------------------------------------|          |
                        |       Navigate to chrome.google.com        |          |
                        |--------------------------------------------|          |
                                              ↓                                 |
                        |--------------------------------------------|          |
                        |             Download installer             |          |==> Run commands to install additional programs
                        |--------------------------------------------|          |
                                              ↓                                 |
                        |--------------------------------------------|          |
                        |       Open file/folder explorer            |          |
                        |--------------------------------------------|          |
                                              ↓                                 |
                        |--------------------------------------------|          |
                        |       Execute a chrome_installer.exe       |----------|
                        |--------------------------------------------|
                                              ↓
                        |--------------------------------------------|
                        |       Execute a chrome_installer.exe       | ==> Command to on startup
                        |--------------------------------------------|

            alpine => it includes very default set of programmes thats solves our purpose(for installing and other programmes )

            . FROM alpine => download the base of alpine
            . RUN apk add --update redis => It will look back at the image came from the previous step & created a new container out of
              it, So in memory very temporarily we get a brand new container created at the very start of step-2
              apk add --update redis will be the primary running process with the fs snapshot of the alpine
              this will download the redis => and will add the entry to fs file system
            . after that we stop that container => then took the file system snapshot of that container this whole process created a new
              image
            . So now the new Image will have the fs from -> alpine & the additional redis copy (this is again a temporary image)
            . CMD ["redis-server"] -> now the new container will have the file snapshot from the previous step and redis-server will be
              the primary process (which will not be executed in this step, just the container to know if you ever execute this Container
              this is the command that you should run as a primary command)
            . Now again it takes the snapshot of the previous step and shut it down and create a final image out of it

**_<!- Rebuild With Cache ->_**

                        # Use the existing docker image as a base

                        FROM alpine

                        # Download and install dependencies
                        RUN apk add --update redis
                        RUN apk add --update gcc


                        # tell image what to do when it starts as a container
                        CMD ["redis-server"]

             > this time it will use the cache for redis as docker has realized as from prev step this this nothing has changes from the
               the last time we ran docker build so it is going to use it from the Cache.
             > if we change the order of commands gcc and then redis then it will run all the steps of creating temp container to the
               final Container

**_<!- Tagging an Docker Image ->_**

                       |---------------|-----------------|-------------------------|-------------|
                       |     docker    |      build      |  -t sidd/redis:latest   |      .      |
                       |---------------|-----------------|------------↓------------|-------------|
                                                         dockerId/projectName:version

                                > docker run sidd/redis

**_<!- Manual Image generation with Docker Commit ->_**

                    Later.....

**_<!- Node Server Setup ->_**

        ```js
            index.js["server"]
            const app = require("express");

            app.get("/",(req,res)=>{
                res.send("Hello There")
            })

            app.listen(5000,()=>console.log("app is running on PORT 5000"))

        ```

        ```json
        {
            "dependencies" : {
                "express" : "*"
            },
            "script" : {
                "start" : "node index.js"
            }
        }

        ```
        . Docker File

        ```sh
                FROM node:alpine    => get the base Image

                COPY ./ ./          => copy all the things from project folder to Container

                RUN npm install     => run the command to install the dependencies

                CMD ["npm","start"] => Primary process command

        ```

                    > run -> docker build -t sidd/node .
                    > run -> docker run sidd/node

        Note : if we run it it will not open the application on port 5000 as this port is of the Container

**_<!- Port Forwarding ->_**

            - Since browser is making a request to port 5000 and Container also has its own isolated ports of its own is isolation
            - it can receive traffic but it should be linked to the external Port
            - the Container can reach out side world through internet - installing dependencies (Out traffic is possible)
            - but we need Port mapping for incoming requests
            - Port forwarding is strictly a run time constrain (so we can't set this in our Docker file)

                                                                           (Port inside
                                                                             Container)
                       |---------------|--------------|-------|-------|-----|---↓---|------------|
                       |     docker    |      run     |  -p   |  5000 |  :  | 5000  | <image id> |
                       |---------------|--------------|-------|---↑---|-----|-------|------------|
                                                            (route incoming
                                                                request
                                                            to this port )

                        ```sh
                            docker run -p 5000:5000 sidd/node
                        ```

**_<!- Working Directory ->_**

                       |---------------|-----------------|
                       |     WORKDIR   |      /usr/app   |
                       |---------------|--------↑--------|
                                     (any following command will
                                        be executed relative
                                      to this path in Container)

        ```sh
                FROM node:alpine    => get the base Image

                WORKDIR /usr/app

                COPY ./ ./          => copy all the things from project folder to Container

                RUN npm install     => run the command to install the dependencies

                CMD ["npm","start"] => Primary process command

        ```

                    > run -> docker build -t sidd/node .
                    > run -> docker run sidd/node

**_<!- Minimizing Cache Bursting and Re-build ->_**

        ```sh
                FROM node:alpine    => get the base Image

                WORKDIR /usr/app

                COPY ./package.json ./
                RUN npm install     => run the command to install the dependencies
                COPY ./ ./          => copy all the things from project folder to Container

                CMD ["npm","start"] => Primary process command

        ```

                    > run -> docker build -t sidd/node .
                    > run -> docker run sidd/node

        - When we run for the the docker build for the 2nd time after making changes in the codebase it is not going to install the
          dependencies again

        - create a file @ root -> .dockerignore | -> node_modules

**_<!- Common Commands ->_**


      - docker build -t sidd/node .
              build an image based on dockerfile in the current directory. tag it as sidd/node
      
      - docker run [image id or image tag]
              create and start container based on a provided image id or tag
      
      - docker run -it [container id] [command] | sh
              create and start container and but also override the default command 
      
      - docker ps
              print out the information about all of the running container

      - docker exec -it [container id] [command] | sh
              execute the given command in the running container
      
      - docker logs [container id]
              print out logs from the given container


