game.resources = [

	/* Graphics. 
	 * @example
	 * {name: "example", type:"image", src: "data/img/example.png"},
	 */ 
        
        // This is the code that allows the images from my img folder to be accessed in my game
        {name: "background-tiles", type:"image", src: "data/img/background-tiles.png"},
         {name: "meta-tiles", type:"image", src: "data/img/meta-tiles.png"},
        {name: "mario", type:"image", src: "data/img/player1.png"},
        {name: "title-screen", type:"image", src: "data/img/title-screen.png"},
        {name: "slime", type:"image", src: "data/img/slime-spritesheet.png"},
        
        
	/* Atlases 
	 * @example
	 * {name: "example_tps", type: "tps", src: "data/img/example_tps.json"},
	 */
		
	/* Maps. 
	 * @example
	 * {name: "example01", type: "tmx", src: "data/map/example01.tmx"},
	 * {name: "example01", type: "tmx", src: "data/map/example01.json"},
 	 */
        
        //This lines of code 
        {name: "Raylevel01", type: "tmx", src: "data/map/Raylevel01.tmx"},
        {name: "Raylevel02", type: "tmx", src: "data/map/Raylevel02.tmx"},

	/* Background music. 
	 * @example
	 * {name: "example_bgm", type: "audio", src: "data/bgm/"},
	 */	

	/* Sound effects. 
	 * @example
	 * {name: "example_sfx", type: "audio", src: "data/sfx/"}
	 */
]