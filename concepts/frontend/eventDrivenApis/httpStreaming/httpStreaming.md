Links : https://www.youtube.com/watch?v=6RvlKYgRFYQ&ab_channel=AmbientCoder

Overview :
HTTP Streaming
Client -> sends req to server -> Server
Server responds but the response is indefinite and server keep sending more data
2 ways to do this
1-> chunked data (generally between server to server)
2-> server-sent-events

Pros
-> Can stream over simple HTTP
-> Native browser support

Cons
-> bidirectional communication is challenging
-> buffering
