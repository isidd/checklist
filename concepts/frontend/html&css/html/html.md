
**_HTML_ :_**
We use HTML to mark up our document > each of the HTML elements ends up forming parts of a tree 
      Root > Parents > Children > Grand-Children etc..
    and when our browser read in this text file it generates Objects in the computer memory that represents these HTML elements.
    These individual Objects then have reference to each other eg: their children.. 
    i.e.> one object knows another object located in memory 
    Basic idea is to form a way a Tree of Objects and that tree models or represents the HTML document that is written.
    and So, we refer to this three as document object model.. 

                          HTML    =============> (BROWSER) =========> DOM
                        (text file)      (Read and Converts it into)

HTML is a text file which browser reads and convert it into the DOM(Collection of objects in the computer's memory) browser that takes that info(those objects in memory) and render (and part of rendering called paint) the web page to the user screen..
