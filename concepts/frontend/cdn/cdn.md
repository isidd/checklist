Link : https://www.youtube.com/watch?v=bJ9NnLLMQ78&ab_channel=ByteMonk

Overview :

Videos on youtube loads faster than video on other website -> this is due to CDN
-> Fast Content Delivery
-> Reduce Load
In hight traffic website remains available

It is a system of server located on the different parts of the world that work together to delivery content
This help website delivery content quickly to users all over the world even if they are far located from the website server

User enters | https://youtube.com -> DNS Resolver (it will tell the IP address points to youtube.com)
this when we are not using CDN
but if we are using a CDN -> it will point to a youtube.cdn.com | that is domain name of youtube CDN server
the DNS resolver resolves the IP of the CDN load balancer to the users web browser
the user web browser sends a request to the CDN load balancer for content
CDN load balancer receives a request and uses a load balancing algo to select the Edge server to handle the request
Selection is based on the :
-Location of the user
-capacity of the Edge server
-amount of traffic on the network
Edge server -> physical location of the CDN server | data centers
CDN Edge server -> will check its cache for the requested content if it is not there
-> it sends a req. to the Origin server
Now CDN server will copy its content and cache the content served fro the Origin server

                            ====Hierarchy====

                            Central/Origin Server      | this is responsible for storing original version of the content

                                    ||
                                    \/

                        Intermediate/Regional Server   | US/EU it is located between the Origin and the Edge server- there server manage the
                                                         traffic between the Origin server and edge server
                                    ||
                                    \/

                                Edge Server            | this is mainly responsible for caching and delivering content to the end user, these
                                                         servers are spread across the different geographic regions and design to handle high volume of traffic. By caching content at the edge server CDN can reduce the amount of traffic that needs to send back ti the Origin server and helps reduce latency

CDN Providers:

- Amazon cloud front
- Akamai
- fastly
- cloudflare

System Design :

- Improve Performance
- Reduce Latency
- Handling large traffic
- Reliable
- Reduce down time
