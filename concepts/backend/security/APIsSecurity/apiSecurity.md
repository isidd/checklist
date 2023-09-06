Link :

Overview :

- Authentication :
  . We should not use basic auth instead we should instead we should be using the Standard JWT.
  . There should be a User type and resource type authorization
  . We should encrypt the sensitive data
  . There has to be a token expiration time
  . Generally with the banking application, we should not allow multiple login
  . We should limit the request from a single source with in a given period of time or may be blacklist the ip based on the request activity
  . Validate content-type on request -> 406 if not available
  . validate user input to avoid XSS, SQL injections
  . Use API gateway to enable caching, rate limit policies
