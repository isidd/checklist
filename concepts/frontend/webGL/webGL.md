Link : https://www.youtube.com/watch?v=f-9LEoYYvE4&ab_channel=Fireship

Overview :
Web Graphics Library -> Its Javascript API for implementing 2D and 3D vector graphics in the browser
It allow us to to run hardware accelerated graphics with the clients GPU directly inside the HTML canvas without any external plugins
Used for :

- 3D web design
- interactive games
- data visualization
- Simulations
- art work

It is used to render graphics in tools like

- Google Maps
- and to Unity engine to make web based games

3D theory and the Rendering Pipeline
Vertices -> Primitives -> Fragments -> Pixels
in a 3D scene
every point is a vertex identified by its X,Y,Z coordinates -> vertices then connected together to make bunch of triangles known as primitives -> then the light source bounces off them to crate appearance of shadows and depth perception -> they are then rasterized to convert a 3D vector graphic into a projection of 2D pixel
This pipeline can be customized by writing shaders which are just functions that tell the computer how to draw pixel on the screen
Shading requires the computer to perform a ton of linear algebra or matrix multiplication to render graphics smoothly at 60fps
therefore we use GPUs to distribute the calculation more efficiently

WebGL allows us to process graphics on the GPU and its based on a library called OpenGL
For shaders we can use libraries

- threeJs
- spline
  to design 3D experiences without knowing much about webGL
