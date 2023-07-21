Link : https://www.youtube.com/watch?v=hkXzsB8D_mo&ab_channel=AmbientCoder

Overview :
PRCs are remote procedural calls
Its all about actions -> this paradigm will have the endpoints for each action
https://example.com/api/chat.postMessages()
https://example.com/api/chat.deleteMessages()
https://example.com/api/chat.scheduleMessage()

http based RPC APIs usually support

- GET for read only request
- POST for the rest

Good For :

- Easy to understand | as the action is part of the url itself they are pretty self descriptive
- Lightweight payloads | as they are tied to actions directly payload tend to associated with the action itself so they are light weight
- High Performance | as they are action oriented

Not Good For :

- Discovery is difficult | it is not possible to assume operations available on resources as they are not standardize like REST apis
- Limited Standardization
- Function explosion | this style leads to function explosion over time as feature are added to products no. of endpoints representing these function can out of control

BEST : for exposing several actions

They are good for exposing actions rather than CRUD like operation
