Link : https://www.youtube.com/watch?v=QZIeZM-yXXU&ab_channel=Cododev

Overview :

        Buffers -> to understand buffers we need to get a good grasp on 4 simple computer science concept
            . Binary Data
            . Binary Numbers
            . Hexa-Decimal Numbers or base 16 Numbers
            . Character sets and Character encoding

    . Binary Data
        Its a data whose unit only have 2 possible states (0s,1s). Everything we see on computer is binary data
        eg : Image, sounds, websites etc..
        Apple M1 -> roughly 16 billion transistors each one of transistors represents OFF or ON (Binary States)
        5G Connections, Storage Device, they all have their own system to store/emit -> (0s and 1s)

                                ▢   ▢   ▢   ▢   ▢   ▢   ▢   ▢
                                1   0   1   1   1   0   1   0

                            ▢ -> 1 bit (it could have 2 states 0/1)
                            8 x ▢ -> 1 byte

        Hexa-Decimal Use case :
            . Css -> #fff #000
            . % -> express some character in URLs like space %20
            . &#x -> express unicode characters
        prefix -> 0x (most common indicator for hexadecimal numbers)

    . Character Sets
        Its a lets and symbol that writing system uses, and a representation of assigning different number to those characters
          1. Unicode (Standard for representing and encoding characters in most writing systems worldwide)
            any language will have its characters and symbols assigned to a number
            it defines over 144,697 characters
            eg s -> 115

          2. ASCII (American Standard Code For Information Interchange)
             It defines 128 characters [A->Z, a->z, @!..] and some control characters like DEL, BACKSPACE etc..
             Its a subset of unicode  s -> 115

    . Character Encoding
        Its a system of assigning a sequence of bytes -> to the character
        most common one is -> utf-8 | its character has same no as unicode


                                            Buffers
        Buffer is a container in memory that temporally holds fixed length sequence of bytes
                                            (buffer)
                                        |---------------|
                                   ---> | 0 1 0 1 0 0 1 | --->
                                   ---> | 1 1 1 1 1 1 1 | --->
                                        |---------------|
                                     It holds raw binary data

            . Javascript does't have a way to deal with raw binary data
            . But in Node we have buffers so it can deal with raw binary data (files, streams..)

```js
const buff = buffer;
```
