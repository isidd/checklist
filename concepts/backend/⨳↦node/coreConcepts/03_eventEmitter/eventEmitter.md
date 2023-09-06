Links : https://www.youtube.com/watch?v=7BhD2txiITM&ab_channel=Cododev

Overview :

    Event Emitter -> It is a global object in which we can attach a listener



                                        Process

        |--------|        |----------|
        |        | Stream |  Online  |
        |  Node  |   ==>  |  Video   |  (chunk of data is shared between node server and online video editing tool)
        |        |        |  Editing |
        |--------|        |----------|
      |---------------------------------------------------------------------------------------------|
      |                                     Operating System                                        |
      |---------------------------------------------------------------------------------------------|
        |---------|          |---------|           |-▢------------|           |------------------|
        |   CPU   |          |   RAM   |           | ▢  Storage   |           |   Network Card   |
        |---------|          |---------|           |-▢------------|           |------------------|

|---------------------------------------Motherboard---------------------------------------------------------|

. CPU > Storage > RAM > NetworkCard | all are placed on the motherboard
. OS is running on top of it

            - suppose our CPU has 2 cores it only handles 2 threads -> they only execute one at a time so only 2 processes
            - so if we run for loop in one of these cores that core is going to get completely occupied until it finishes the loop
