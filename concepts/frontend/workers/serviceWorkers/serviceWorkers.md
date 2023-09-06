Link : https://www.youtube.com/watch?v=Yq32eUYg6Lc&ab_channel=Firebase

Overview :
Web Workers -> are a background thread in web browsers that we can program -> for eg: I/O related task
it does not have the DOM access so we need to Post messages to make a communication

Service Workers -> they are based on Web workers they run in the background, and it is specifically related to caching.
it behaves as proxy between our page and server. So we can influence the caching set up online behavior and the other one is general background task
intercepting network requests | Push notification

               | Web Workers  | Service Workers  |

|--------------|--------------|------------------|
| Instances | Many per tab | One for all tabs |
| Lifespan | Same as tab | Independent |
| Intended use | Parallelism | Offline support |

Complete Service Workers Series :
https://www.youtube.com/watch?v=NJRu3pmmN-4&list=PLyuRouwmQCjl4iJgjH3i61tkqauM-NTGj&ab_channel=SteveGriffith-Prof3ssorSt3v3
