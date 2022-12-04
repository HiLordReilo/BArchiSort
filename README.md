What is it? Like, 3rd fork for Blue Archive? whatevs

# charasort
A web based character sorter. Allows users to run through a manual merge sort of their favorite
characters from a set.
 
The version in this fork is built for characters from **Blue Archive** ([Wiki](https://bluearchive.wiki/wiki/Main_Page)/[Fandom](https://bluearchive.fandom.com/wiki/Blue_Archive_Wiki)).

This fork has filters that allows to disable
 * Japan-only characters
 * Alternative variations
 * NPCs
 * Unique characters
 
It's pretty barebones as of now, so if you want to filter characters by schools with a more pleasant design, then you should probably check [this](https://github.com/simpelplant/charasort-bluearchive) fork.

## Credits

 * [charasort](https://github.com/execfera/charasort) for the source code
 * [Blue Archive Wiki](https://bluearchive.wiki/wiki/Main_Page) for character portaits (I was lazy to upload them to imgur lul)
 * [html2canvas](https://github.com/niklasvh/html2canvas/) for image generation.
 * [seedrandom](https://github.com/davidbau/seedrandom) for PRNG used in character array shuffling.
 * [lz-string](https://github.com/pieroxy/lz-string) for shareable link compression.
 * [SpinKit](http://tobiasahlin.com/spinkit/) for loading animation.
 * [thsort](http://mainyan.sakura.ne.jp/thsort.html) for the original inspiration.

## Known Issues

 * Does not work with CloudFlare's Rocket Loader.
 * Breaks on older versions of IE and mobile Safari, due to various incompatibilities.
 * Barebones in terms of features.
